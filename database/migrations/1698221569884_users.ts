import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('username', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.string('ten', 255)
      table.date('ngay_sinh')
      table.string('dien_thoai')
      table.json('ds_role')
      table.boolean('is_active').notNullable().defaultTo(true)
      table.boolean('is_delete').notNullable().defaultTo(false)
      table.text('ghi_chu')
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: false }).notNullable()
      table.timestamp('updated_at', { useTz: false }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
