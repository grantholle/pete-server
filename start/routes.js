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
  Route.resource('tv', 'TvController').apiOnly()
  Route.get(`tv/:id/tmdb`, `TvController.tmdb`).as('tv.tmdb')

  Route.resource('movies', 'MovieController').apiOnly()
  Route.get(`movies/:id/tmdb`, `MovieController.tmdb`).as('movies.tmdb')

  Route.post('watchlist/update', 'WatchlistController.update').as('watchlist.update')

  Route.get(`config`, `ConfigController.index`).as(`config.index`)
  Route.post(`config`, `ConfigController.update`).as(`config.update`)
}).prefix(`api/v1`)

Route.on('*').render('welcome')
