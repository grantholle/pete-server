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
  Route.post(`tv/:id/tmdb`, `TvController.tmdbCreate`).as('tv.new')
  Route.post(`tv/:id/fetch`, `TvController.fetchSeason`).as('tv.fetch')

  Route.resource('movies', 'MovieController').apiOnly()
  Route.get(`movies/:id/tmdb`, `MovieController.tmdb`).as('movies.tmdb')
  Route.get(`movies/:id/torrent`, `MovieController.torrent`).as('movies.torrent')

  Route.post('watchlist/update', 'WatchlistController.update').as('watchlist.update')
  Route.get('watchlist/movies', 'WatchlistController.movies').as('watchlist.movies')
  Route.get('watchlist/tv', 'WatchlistController.tv').as('watchlist.tv')

  Route.get(`config`, `ConfigController.index`).as(`config.index`)
  Route.post(`config`, `ConfigController.update`).as(`config.update`)

  Route.post(`token`, `SessionController.getRequestToken`)
  Route.post(`session`, `SessionController.getSession`)

  Route.post(`search/movies`, `SearchController.movies`)
  Route.post(`search/tv`, `SearchController.tv`)

  Route.post(`finished`, `FinishedController.index`)
  Route.post(`script`, `FinishedController.updateScript`)
}).prefix(`api/v1`)

Route.on('*').render('index')
