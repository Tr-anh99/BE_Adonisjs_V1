import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.create({
      username: 'admin',
      email: 'admin@admin.com',
      ten: 'Admin Hệ Thống',
      password: 'admin',
      ds_role: [1, 2],
    })
  }
}
