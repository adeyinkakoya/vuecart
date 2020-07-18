<?php

use App\Cart;
use App\Product;
use Illuminate\Http\Request;

// namespace is for when you create a new folder (API/)for your controllers and not the URL. Routes in api.php automatically use the api/ prefix when accessing them.
Route::group(['namespace' => 'Api'], function () {
    Route::get('/products', 'ProductsController@index');
    Route::get('/products/{product}', 'ProductsController@show');

    Route::get('/cart', 'ProductsCartController@index');
    Route::post('/cart', 'ProductsCartController@store');
    Route::delete('/cart/{productId}', 'ProductsCartController@destroy');
    Route::delete('/cart', 'ProductsCartController@destroyAll');
});
