<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\Models\UserLogin;

class LoginController extends Controller
{
    public function buyerLogin(Request $request)
    {
        $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);
        //buyer login
        if (Auth::attempt([
            'email' => $request->email,
            'password' => $request->password,
            'user_type' => 'user',
            'buyer_account' => 1]))
        {

            $user = $request->user();

            $response = [
                'success' => true,
                'token' => $user->createToken('Buyer')->plainTextToken,
                'message' => 'User login successfully',
            ];

            return response()->json($response, 200);
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
            'seller_account' => 1]))
        {

            $user = $request->user();

            $response = [
                'success' => true,
                'token' => $user->createToken('Seller')->plainTextToken,
                'message' => 'User login successfully',
            ];

            return response()->json($response, 200);
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
            'user_type' => 'admin']))
        {

            $user = $request->user();

            $response = [
                'success' => true,
                'token' => $user->createToken('Admin')->plainTextToken,
                'message' => 'User login successfully',
            ];

            return response()->json($response, 200);
        }

        throw ValidationException::withMessages([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }


    public function logout()
    {
        Auth::logout();
    }
}
