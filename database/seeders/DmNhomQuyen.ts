import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import DmNhomQuyen from 'App/Models/DanhMuc/DmNhomQuyen'

export default class extends BaseSeeder {
  public async run() {
    await DmNhomQuyen.createMany([
      { ten_nhom_quyen: 'Quản trị hệ thống', mo_ta: 'Quản trị hệ thống', trang_thai: true },
      { ten_nhom_quyen: 'Sale', mo_ta: 'Sale', trang_thai: true },
      { ten_nhom_quyen: 'View all Trung Tâm', mo_ta: 'View all Trung Tâm', trang_thai: true },
    ])
  }
}
