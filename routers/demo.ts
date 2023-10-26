import Route from '@ioc:Adonis/Core/Route'

export function demoRoute() {
  Route.group(() => {
    Route.get('demo-permission', 'DemoPermissionController.demo').middleware([
      'permission:qtht_suanhanvien,qldm_themdemuc',
    ])
  })
    .middleware(['auth'])
}
