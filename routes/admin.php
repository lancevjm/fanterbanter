<?php

use Illuminate\Support\Facades\Route;

Route::get('auth/logout', function () {
    Auth::guard('web')->logout();
    return redirect('/');
});

Route::get('/auth/{vue?}', function () {
    return view('admin', ['title' => "Admin Panel"]);
})->where('vue', '[\/\w\.-]*')->middleware(['guest'])->name('admin');

Route::get('/{vue?}', function () {
    return view('admin', ['title' => "Admin Panel"]);
})->where('vue', '[\/\w\.-]*')->middleware('allow_admin')->name('admin-dashboard');