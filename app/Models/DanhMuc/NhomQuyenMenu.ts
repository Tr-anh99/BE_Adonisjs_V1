import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class NhomQuyenMenu extends BaseModel {
  public static table = 'dm_nhom_quyen_menu'

  @column({ isPrimary: true })
  public id: number

  @column({ isPrimary: true })
  public id_nhom_quyen: number

  @column({ isPrimary: true })
  public id_menu: number

  @column({ isPrimary: true })
  public trang_thai: boolean
}
