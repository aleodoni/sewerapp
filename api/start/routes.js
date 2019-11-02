'use strict'

const Route = use('Route')

Route.group(() => {
  Route.post('register', 'RegisterController.store')

  Route.post('sessions', 'SessionController.store')

  Route.post('users', 'UserController.store')
}).prefix('api')
