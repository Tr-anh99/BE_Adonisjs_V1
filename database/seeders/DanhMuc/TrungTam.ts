import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TrungTam from 'App/Models/DanhMuc/TrungTam'

export default class extends BaseSeeder {
  public async run() {
    await TrungTam.createMany([
      {
        ten: 'Giải Phóng',
        mo_ta: 'Giải Phóng',
        color: '#54657c',
      },
    ])
  }
}
