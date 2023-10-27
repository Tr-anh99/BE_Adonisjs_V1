import Route from '@ioc:Adonis/Core/Route'

export function quanTriRoute() {
  Route.group(() => {
    Route.get('get-ds-menu', 'QuanTriController.get_DSMenu')
    Route.get('get-menu-by-user', 'QuanTriController.Get_Menu_By_IdUser')
  })
    .prefix('quan-tri')
    .middleware(['auth'])
}
