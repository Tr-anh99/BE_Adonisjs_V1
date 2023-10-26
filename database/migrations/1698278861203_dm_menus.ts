import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'dm_menus'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('label')
      table.string('mo_ta')
      table.boolean('id_parent')
      table.integer('stt')
      table.string('path')
      table.string('icon')
      table.boolean('is_group')
      table.boolean('is_show')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
