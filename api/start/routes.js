'use strict'

const Route = use('Route')

Route.group(() => {
  Route.post('register', 'RegisterController.store').validator('Register')

  Route.post('sessions', 'SessionController.store').validator('SessionStore')

  Route.put('users', 'UserController.update').middleware('auth').validator('UserUpdate')

  Route.get('places', 'PlaceController.index').middleware('auth')
  Route.get('places/:id', 'PlaceController.show').middleware('auth')
  Route.post('places', 'PlaceController.store').middleware('auth').validator('Place')
  Route.put('places/:id', 'PlaceController.update').middleware('auth').validator('Place')
  Route.delete('places/:id', 'PlaceController.delete').middleware('auth')

  Route.get('geos', 'GeoController.index').middleware('auth')
  Route.get('geos/:id', 'GeoController.show').middleware('auth')
  Route.post('geos', 'GeoController.store').middleware('auth').validator('Geo')
  Route.put('geos/:id', 'GeoController.update').middleware('auth').validator('GeoUpdate')
  Route.delete('geos/:id', 'GeoController.delete').middleware('auth')
}).prefix('api')
