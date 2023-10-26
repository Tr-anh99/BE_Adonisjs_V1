import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'dm_nhom_quyens'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('ten_nhom_quyen').notNullable()
      table.text('mo_ta')
      table.boolean('trang_thai')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
