<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/{any}', function () {
    return view('app');
})->where("any", ".*");

Route::get('/', function () {
    return redirect('/');
});

// Register
Route::get('register', function () {
    return redirect('/register');
});

// Buyer
Route::get('/login', function () {
    return redirect('/login');
});


// Seller
Route::get('/seller.login', function () {
    return redirect('/seller.login');
});

// Admin
Route::prefix('admin')->get('/dashboard', function () {
    return redirect('/dashboard');
});
