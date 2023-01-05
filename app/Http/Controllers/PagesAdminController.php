<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesAdminController extends Controller
{
    public function dashboard()
    {
        return redirect('/dashboard');
    }

    public function loginAdmin()
    {
        return redirect('/admin.login');
    }
}
