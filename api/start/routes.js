'use strict'

const Route = use('Route')

Route.group(() => {
  Route.post('register', 'RegisterController.store')

  Route.post('sessions', 'SessionController.store').validator('SessionStore')

  Route.post('users', 'UserController.store')

  Route.get('places', 'PlaceController.index')
  Route.post('places', 'PlaceController.store').validator('Place')
  Route.put('places/:id', 'PlaceController.update').validator('Place')
}).prefix('api')
