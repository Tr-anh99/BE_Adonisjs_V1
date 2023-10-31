import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Menu from 'App/Models/DanhMuc/Menu'
import NhomQuyen from 'App/Models/DanhMuc/NhomQuyen'
import NhomQuyenMenu from 'App/Models/DanhMuc/NhomQuyenMenu'
import NhomQuyenQuyenThaoTac from 'App/Models/DanhMuc/NhomQuyenQuyenThaoTac'
import QuyenThaoTac from 'App/Models/DanhMuc/QuyenThaoTac'

export default class extends BaseSeeder {
  public async run() {
    await NhomQuyen.createMany([
      { ten_nhom_quyen: 'Quản trị hệ thống', mo_ta: 'Quản trị hệ thống', trang_thai: true },
      { ten_nhom_quyen: 'Sale', mo_ta: 'Sale', trang_thai: true },
      { ten_nhom_quyen: 'View all Trung Tâm', mo_ta: 'View all Trung Tâm', trang_thai: true },
    ])

    await QuyenThaoTac.createMany([
      {
        ma_quyen: null,
        ten_quyen: 'Quản lý đề mục',
        parent_id: 0,
        is_parent: true,
        trang_thai: true,
      },
      {
        ma_quyen: 'qldm_themdemuc',
        ten_quyen: 'Thêm đề mục',
        parent_id: 1,
        is_parent: false,
        trang_thai: true,
      },
      {
        ma_quyen: 'qldm_xoademuc',
        ten_quyen: 'Xóa đề mục',
        parent_id: 1,
        is_parent: false,
        trang_thai: true,
      },
      {
        ma_quyen: 'qldm_suademuc',
        ten_quyen: 'Sửa đề mục',
        parent_id: 1,
        is_parent: false,
        trang_thai: true,
      },
      {
        ma_quyen: null,
        ten_quyen: 'Quản trị hệ thống',
        parent_id: 0,
        is_parent: true,
        trang_thai: true,
      },
      {
        ma_quyen: 'qtht_xoanhanvien',
        ten_quyen: 'Xóa nhân viên',
        parent_id: 5,
        is_parent: false,
        trang_thai: true,
      },
      {
        ma_quyen: 'qtht_suanhanvien',
        ten_quyen: 'Sửa nhân viên',
        parent_id: 5,
        is_parent: false,
        trang_thai: true,
      },
      {
        ma_quyen: 'qtht_themnhanvien',
        ten_quyen: 'Thêm mới nhân viên',
        parent_id: 5,
        is_parent: false,
        trang_thai: true,
      },
    ])

    await Menu.createMany([
      {
        label: 'Trang Chủ',
        mo_ta: 'Trang Chủ',
        id_parent: 0,
        stt: 1,
        path: '/Home',
        icon: 'Home',
        is_group: false,
        is_show: true,
      },
      {
        label: 'CSKH',
        mo_ta: 'CSKH',
        id_parent: 0,
        stt: 2,
        path: '/CSKH',
        icon: 'CSKH',
        is_group: false,
        is_show: true,
      },
    ])

    await NhomQuyenQuyenThaoTac.createMany([
      {
        id_nhom_quyen: 1,
        id_quyen: 1,
        trang_thai: true,
      },
      {
        id_nhom_quyen: 1,
        id_quyen: 2,
        trang_thai: true,
      },
      {
        id_nhom_quyen: 1,
        id_quyen: 3,
        trang_thai: true,
      },
      {
        id_nhom_quyen: 1,
        id_quyen: 4,
        trang_thai: true,
      },
      {
        id_nhom_quyen: 1,
        id_quyen: 5,
        trang_thai: true,
      },
      {
        id_nhom_quyen: 1,
        id_quyen: 6,
        trang_thai: true,
      },
      {
        id_nhom_quyen: 1,
        id_quyen: 7,
        trang_thai: true,
      },
      {
        id_nhom_quyen: 1,
        id_quyen: 8,
        trang_thai: true,
      },
    ])

    await NhomQuyenMenu.createMany([
      {
        id_nhom_quyen: 1,
        id_menu: 1,
        trang_thai: true,
      },
      {
        id_nhom_quyen: 1,
        id_menu: 2,
        trang_thai: true,
      },
      {
        id_nhom_quyen: 2,
        id_menu: 1,
        trang_thai: true,
      },
      {
        id_nhom_quyen: 2,
        id_menu: 2,
        trang_thai: true,
      },
    ])
  }
}
