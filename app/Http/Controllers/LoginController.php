<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

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

            if ($user->user_type == 'admin') {
                $response = [
                    'success' => true,
                    'data' => $user->createToken('MyApp')->plainTextToken,
                    'message' => 'User login successfully',
                    'isAdmin' => true
                ];
                return response()->json($response, 200);
            }
            $response = [
                'isAdmin' => false
            ];
            return response()->json($response, 404);
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
