<?php

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
// Route::get('/music', 'MusicController@index');

//Routing for music
Route::get('/music/shazam', 'MusicController@showShazam');
Route::get('/music/musicweekly', 'MusicController@showMusicWeekly');
Route::get('/music/itunes', 'MusicController@showItunes');
Route::get('/music/fetch', 'MusicController@update');
