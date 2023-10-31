import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TrungTam extends BaseModel {
  public static table = 'dm_trung_tams'

  @column({ isPrimary: true })
  public id: number

  @column()
  public ten: string

  @column()
  public mo_ta: string

  @column()
  public color: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
