import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class NhomQuyenQuyenThaoTac extends BaseModel {
  public static table = 'dm_nhom_quyen_quyen_thao_tac'

  @column({ isPrimary: true })
  public id: number

  @column({ isPrimary: true })
  public id_nhom_quyen: number

  @column({ isPrimary: true })
  public id_quyen: number

  @column({ isPrimary: true })
  public trang_thai: boolean
}
