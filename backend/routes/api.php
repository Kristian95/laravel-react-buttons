<?php

use App\Http\Controllers\ButtonController;
use Illuminate\Support\Facades\Route;

Route::get('/buttons', [ButtonController::class, 'index']);
Route::post('/buttons', [ButtonController::class, 'storeOrUpdate']);
Route::delete('/buttons/{id}', [ButtonController::class, 'destroy']);
