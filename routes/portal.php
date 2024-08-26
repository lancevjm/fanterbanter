<?php

use Illuminate\Support\Facades\Route;

Route::get('auth/logout', function () {
    Auth::guard('web')->logout();
    return redirect('/');
});

Route::get('/auth/{vue?}', function () {
    return view('portal', ['title' => "Admin Panel"]);
})->where('vue', '[\/\w\.-]*')->middleware(['guest'])->name('portal');

Route::get('/{vue?}', function () {
    return view('portal', ['title' => "Admin Panel"]);
})->where('vue', '[\/\w\.-]*')->middleware('allow_client')->name('portal_dashboard');