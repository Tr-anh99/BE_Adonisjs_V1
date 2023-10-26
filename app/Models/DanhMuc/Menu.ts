import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Menu extends BaseModel {
  public static table = 'dm_menus'

  @column({ isPrimary: true })
  public id: number

  @column()
  public label: string

  @column()
  public mo_ta: string

  @column()
  public id_parent: number

  @column()
  public stt: number

  @column()
  public path: string

  @column()
  public icon: string

  @column()
  public is_group: boolean

  @column()
  public is_show: boolean
}
