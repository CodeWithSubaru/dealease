<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\Models\UserLogin;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{

    private $user = '';

    public function buyerLogin(Request $request)
    {
        $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::attempt([
            'email' => $request->email,
            'password' => $request->password,
            'user_type' => 'user',
            'buyer_account' => 1
        ])) {

            $this->user = $request->user();
            $token = 'Buyer';
            $result = $this->successLogin($this->user, $token);

            return $result;
        }

        throw ValidationException::withMessages([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function sellerLogin(Request $request)
    {
        $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        // seller login
        if (Auth::attempt([
            'email' => $request->email,
            'password' => $request->password,
            'user_type' => 'user',
            'seller_account' => 1,
        ])) {

            $this->user = $request->user();
            $token = 'Seller';
            $result = $this->successLogin($this->user, $token);

            return $result;
        }

        throw ValidationException::withMessages([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function adminLogin(Request $request)
    {
        $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        // seller login
        if (Auth::attempt([
            'email' => $request->email,
            'password' => $request->password,
            'user_type' => 'admin',
        ])) {

            $this->user = $request->user();
            $token = 'Admin';
            $result = $this->successLogin($this->user, $token);

            return $result;

        }

        throw ValidationException::withMessages([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function successLogin($user, $token) {
        $response = [
            'success' => true,
            'token' => $user->createToken($token)->plainTextToken,
            'message' => 'User login successfully',
            'user_data' => json_encode($this->user),
        ];

        return response()->json($response, 200);
    }


    public function logout(Request $request)
    {
        try {
            $user = UserLogin::findOrFail($request->input('user_id'));

            $user->tokens()->delete();

            return response()->json('User logged out', 200);
        } catch (\Exception $e) {
            return response()->json([
                "error" => $e->getMessage(),
                'message' => "Something went wrong in logout",
            ]);
        }
    }
}
