import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class NhomQuyen extends BaseModel {
  public static table = 'dm_nhom_quyens'

  @column({ isPrimary: true })
  public id: number

  @column()
  public ten_nhom_quyen: string

  @column()
  public mo_ta: string

  @column()
  public trang_thai: boolean
}
