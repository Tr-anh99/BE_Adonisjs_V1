import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Permission {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>,
  ) {
    console.log("🚀 ~ file: Permission.ts:8 ~ Permission ~ auth:",Array.isArray(auth.user?.ds_role))
    // if (!auth.user || !roles.some((role) => auth.user?.roles?.includes(role))) {
    //   return response.status(401).send({
    //     message: 'Bạn không có quyền truy cập',
    //   })
    // }


    if (!auth.user) {
      return response.status(401).send({
        message: 'Bạn không có quyền truy cập',
      })
    }

    await next()
  }
}
