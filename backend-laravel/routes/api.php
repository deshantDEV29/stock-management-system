<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\DashboardController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::post('addproduct', [ProductController::class, 'addproduct']);
Route::post('removeproduct', [ProductController::class, 'removeproduct']);
Route::get('displayproduct', [ProductController::class, 'displayproduct']);
Route::post('productrecieved', [ProductController::class, 'productrecieved']);
Route::post('productdispatched', [ProductController::class, 'productdispatched']);
Route::get('getSupplier', [ProductController::class, 'getSupplier']);
Route::get('displayproductrecieved', [ProductController::class, 'displayproductrecieved']);
Route::get('displayproductdispatched', [ProductController::class, 'displayproductdispatched']);
Route::get('displayproductname', [ProductController::class, 'displayproductname']);
Route::get('displaytotalproduct', [DashboardController::class, 'displaytotalproduct']);
Route::get('displaytotalsuppliers', [DashboardController::class, 'displaytotalsuppliers']);
Route::get('displayvaluestocks', [DashboardController::class, 'displayvaluestocks']);
Route::get('displaytopselling', [DashboardController::class, 'displaytopselling']);
Route::middleware(['auth:sanctum'])->group(function () {

});




