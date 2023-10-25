import Route from '@ioc:Adonis/Core/Route'

export function authRoute() {
  Route.group(() => {
    Route.post('login', 'AuthController.login')
  }).prefix('auth')

  Route.group(() => {
    Route.get('me', 'AuthController.me')
    Route.post('logout', 'AuthController.logout')
  })
    .prefix('auth')
    .middleware(['auth:api,web'])
    .middleware(['permission'])
}
