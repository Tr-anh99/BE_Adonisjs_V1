import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'dm_nhom_quyen_quyen_thao_tac'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_nhom_quyen')
      table.integer('id_quyen')
      table.boolean('trang_thai')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
