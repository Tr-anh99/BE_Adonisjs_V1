import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'dm_quyen_thao_tacs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('ma_quyen').notNullable()
      table.string('ten_quyen').notNullable()
      table.integer('parent_id').notNullable()
      table.boolean('is_parent').notNullable()
      table.boolean('trang_thai').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
