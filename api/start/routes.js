'use strict'

const Route = use('Route')

Route.group(() => {
  Route.post('register', 'RegisterController.store').validator('Register')

  Route.post('sessions', 'SessionController.store').validator('SessionStore')

  Route.post('users', 'UserController.store')

  Route.get('places', 'PlaceController.index').middleware('auth')
  Route.get('places/:id', 'PlaceController.show')
  Route.post('places', 'PlaceController.store').validator('Place')
  Route.put('places/:id', 'PlaceController.update').validator('Place')
  Route.delete('places/:id', 'PlaceController.delete')
}).prefix('api')
