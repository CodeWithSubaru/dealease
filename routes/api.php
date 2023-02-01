<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;


Route::middleware('auth:sanctum')->get('auth/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [LoginController::class, 'logout']);
    Route::resource('users', UserController::class);
});

Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
});

Route::post('/auth/register', [RegisterController::class, 'register']);
Route::post('/auth/login', [LoginController::class, 'buyerLogin']);
Route::post('/auth/sellerLogin', [LoginController::class, 'sellerLogin']);
Route::post('/auth/adminLogin', [LoginController::class, 'adminLogin']);
