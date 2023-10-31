import Route from '@ioc:Adonis/Core/Route'

export function userRoute() {
  Route.group(() => {
    Route.get('get-user', 'UsersController.index')
    Route.post('post-user', 'UsersController.store')
    Route.post('update-user', 'UsersController.update')
    Route.get('delete-user/:id', 'UsersController.destroy')
  })
    .prefix('user')
    .middleware(['auth'])

  // Route.group(() => {
  //   Route.get('me', 'AuthController.me')
  //   Route.post('logout', 'AuthController.logout')
  // })
  //   .prefix('auth')
  //   .middleware(['auth'])
  //   .middleware(['permission:qtht_suanhanvien,qldm_themdemuc'])
}
