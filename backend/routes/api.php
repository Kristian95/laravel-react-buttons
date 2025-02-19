<?php

use App\Http\Controllers\ButtonController;
use Illuminate\Support\Facades\Route;

Route::get('/buttons', [ButtonController::class, 'index']);
Route::post('/buttons/{id?}', [ButtonController::class, 'storeOrUpdate']);
Route::post('/buttons/{id}', [ButtonController::class, 'update']);
Route::delete('/buttons/{id}', [ButtonController::class, 'destroy']);
