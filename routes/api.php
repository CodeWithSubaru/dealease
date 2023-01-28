<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::resource('users', UserController::class);
});

Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
});


Route::post('logout', [LoginController::class, 'logout']);
Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [LoginController::class, 'buyerLogin']);
Route::post('sellerLogin', [LoginController::class, 'sellerLogin']);
Route::post('adminLogin', [LoginController::class, 'adminLogin']);
