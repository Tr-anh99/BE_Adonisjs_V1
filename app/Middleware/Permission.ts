import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import QuanTriController from 'App/Controllers/Http/QuanTriController'

export default class Permission {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>,
    roles: string[]
  ) {
    console.log('🚀 ~ file: Permission.ts:10 ~ Permission ~ roles:', roles)
    // if (!auth.user || !roles.some((role) => auth.user?.roles?.includes(role))) {
    //   return response.status(401).send({
    //     message: 'Bạn không có quyền truy cập',
    //   })
    // }
    try {
      if (Array.isArray(auth.user?.ds_role) && auth.user?.ds_role) {
        const ds_quyen = await QuanTriController.getQuyenByNhomQuyen(auth.user?.ds_role)
        console.log('🚀 ~ file: Permission.ts:15 ~ Permission ~ handle ~ resquyen:', ds_quyen)
        var haverole = ds_quyen.some((x) => roles.includes(x))
        if (!haverole) {
          response.status(401).send({
            message: 'Bạn không có quyền truy cập',
          })
          return
        }
      }
    } catch (error) {}
    if (!auth.user) {
      return response.status(401).send({
        message: 'Bạn không có quyền truy cập',
      })
    }

    await next()
  }
}
