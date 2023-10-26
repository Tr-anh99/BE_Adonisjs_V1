import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class QuyenThaoTac extends BaseModel {
  public static table = 'dm_quyen_thao_tacs'

  @column({ isPrimary: true })
  public id: number

  @column()
  public ma_quyen: string | null

  @column()
  public ten_quyen: string

  @column({ isPrimary: true })
  public parent_id: number

  @column({ isPrimary: true })
  public is_parent: boolean

  @column()
  public trang_thai: boolean
}
