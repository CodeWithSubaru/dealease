<?php

namespace App\Http\Controllers;

use App\Models\UserInfo;
use App\Models\UserLogin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'birthday' => ['required'],
            'contact_number' => ['required'],
            'region' => ['required'],
            'province' => ['required'],
            'city' => ['required'],
            'baranggay' => ['required'],
            'street' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:6', 'confirmed'],
        ]);

        $userLogin = UserLogin::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'last_name' => $request->last_name,
            'buyer_account' => 1,
            'seller_account' => 0,
            'user_type' => 'user',
            'account_status' => 'active',
        ]);

        if ($userLogin) {
            UserInfo::create([
                'birth_date' => 1,
                'address' => 0,
                'contact_number' => 'user',
            ]);
        }


        return response()->json(['message' => 'Success']);
    }
}
