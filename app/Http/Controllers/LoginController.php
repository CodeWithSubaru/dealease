<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\Models\UserLogin;

class LoginController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $user = $request->user();

            if (Auth::user()->user_type === 'admin') {
                $response = [
                    'success' => true,
                    'data' => $user->createToken('MyApp')->plainTextToken,
                    'message' => 'User login successfully',
                    'is_admin' => true,
                ];

                return response()->json($response, 200);
            }

            $response = [
                'success' => false,
                'message' => 'Unauthorized'
            ];

            return response()->json($response, 401);
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
