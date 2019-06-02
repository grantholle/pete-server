'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.group(() => {
  Route.resource('tv', 'TvController')
    .apiOnly()
  Route.get(`tv/:id/tmdb`, `TvController.tmdb`)
    .as('tv.tmdb')

  Route.resource(`config`, `ConfigController`)
    .except(['destroy', 'show'])
    .apiOnly()
}).prefix(`api/v1`)

Route.on('*').render('welcome')
