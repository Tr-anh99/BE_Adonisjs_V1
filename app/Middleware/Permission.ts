import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class Permission {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    console.log('🚀 ~ file: Permission.ts:8 ~ Permission ~ auth:', auth.user)
    // if (!auth.user || !roles.some((role) => auth.user?.roles?.includes(role))) {
    //   return response.status(401).send({
    //     message: 'Bạn không có quyền truy cập',
    //   })
    // }
    try {
      const res = await Database.rawQuery('select * from users where id = ?', [1])
      console.log('🚀 ~ file: Permission.ts:14 ~ Permission ~ handle ~ res:', res)
    } catch (error) {}
    if (!auth.user) {
      return response.status(401).send({
        message: 'Bạn không có quyền truy cập',
      })
    }

    await next()
  }
}
