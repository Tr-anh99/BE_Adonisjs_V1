import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, BelongsTo, beforeSave, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import TrungTam from './DanhMuc/TrungTam'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public ten: string

  @column()
  public ngay_sinh: string

  @column()
  public dien_thoai: string

  @column()
  public trung_tam_id: number

  @column()
  public ds_role: number[] | string

  @column()
  public is_active: boolean

  @column()
  public is_delete: boolean

  @column()
  public ghi_chu: string

  @column()
  public nguoi_nhap_id: number

  @column()
  public nguoi_sua_id: number

  @column({ serializeAs: null })
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(authentication: User) {
    if (authentication.$dirty.password) {
      authentication.password = await Hash.make(authentication.password)
    }
    if (authentication.ds_role) {
      authentication.ds_role = JSON.stringify(authentication.ds_role)
    }
  }

  @belongsTo(() => TrungTam, {
    foreignKey: 'trung_tam_id',
  })
  public trungtam: BelongsTo<typeof TrungTam>
}
