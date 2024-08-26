<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('web');
// });

Route::get('{vue?}', function () {
    return view('app', ['title' => "Fanter Banter Home"]);
})->where('vue', '[\/\w\.-]*')->middleware(['guest'])->name('app');