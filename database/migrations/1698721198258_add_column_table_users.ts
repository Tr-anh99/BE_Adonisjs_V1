import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('trung_tam_id').references('dm_trung_tams.id').nullable().onDelete('SET NULL')
      table.integer('nguoi_nhap_id').nullable().references('users.id').onDelete('SET NULL')
      table.integer('nguoi_sua_id').nullable().references('users.id').onDelete('SET NULL')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('trung_tam_id', 'users_trung_tam_id_foreign')
      table.dropForeign('nguoi_nhap_id', 'users_nguoi_nhap_id_foreign')
      table.dropForeign('nguoi_sua_id', 'users_nguoi_sua_id_foreign')
    })
  }
}
