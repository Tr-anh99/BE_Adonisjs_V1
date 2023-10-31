import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    try {
      const query = await User.query()
        .select(['id', 'ten', 'trung_tam_id', 'nguoi_nhap_id'])
        .preload('trungtam', (trungtamQuery) => {
          trungtamQuery.select('ten')
        })
        // .preload('danh_sach_tao')
        .preload('nguoi_nhap')
      return response.status(200).send({
        message: 'Thành công',
        data: query,
      })
    } catch (error) {
      console.log('🚀 ~ file: UsersController.ts:20 ~ UsersController ~ index ~ error:', error)
      return response.status(500).send({
        message: 'Không thể tìm thấy danh sách nhân viên',
      })
    }
  }

  public async store({ auth, request, response }: HttpContextContract) {
    const user = auth.user
    const info = request.all()
    info.nguoi_nhap_id = user?.id

    try {
      const query = await User.create(info)
      return response.status(200).send({
        message: 'Thành công',
        data: query,
      })
    } catch (error) {
      return response.status(500).send({
        message: 'Không thành công',
      })
    }
  }

  public async show({}: HttpContextContract) {}

  public async update({ auth, request, response }: HttpContextContract) {
    const user = auth.user
    const info = request.all()
    info.nguoi_sua_id = user?.id

    try {
      const query = await User.query().where('id', info.id).update(info)
      return response.status(200).send({
        message: 'Thành công',
        data: query,
      })
    } catch (error) {
      console.log('🚀 ~ file: UsersController.ts:58 ~ UsersController ~ update ~ error:', error)
      return response.status(500).send({
        message: 'Không thành công',
      })
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()
    try {
      await User.query().where('id', id).delete()
      return response.status(200).send({
        message: 'Thành công',
      })
    } catch (error) {
      return response.status(500).send({
        message: 'Thất bại',
      })
    }
  }
}
