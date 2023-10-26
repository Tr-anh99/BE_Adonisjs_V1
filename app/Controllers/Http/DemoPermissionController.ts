import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DemoPermissionController {
  public demo({ response }: HttpContextContract) {
    return response.status(200).send({
      message: 'Bạn có quyền truy cập',
    })
  }
}
