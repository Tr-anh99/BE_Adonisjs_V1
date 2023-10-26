// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from '@ioc:Adonis/Lucid/Database'

export default class QuanTriController {
  static getQuyenByNhomQuyen = async (ds_role: number[]) => {
    try {
      const queryString = `select array_agg( ds.ma_quyen::TEXT) as ds_quyen from (
        SELECT  distinct ma_quyen
          FROM public.dm_quyen_thao_tacs a
          left join public.dm_nhom_quyen_quyen_thao_tac  e on a.id = e.id_quyen
          where e.trang_thai = true  and a.is_parent = false
          and e.id_nhom_quyen = ANY(?)
          order by a.ma_quyen) ds;`
      const dt = await Database.rawQuery(queryString, [ds_role])

      return dt.rows[0].ds_quyen

      const result = await Database.from((subquery) => {
        subquery
          .from('dm_quyen_thao_tacs as a')
          .leftJoin('dm_nhom_quyen_quyen_thao_tac as e', 'a.id', 'e.id_quyen')
          .where('e.trang_thai', true)
          .where('a.is_parent', false)
          .whereIn('e.id_nhom_quyen', ds_role)
          .orderBy('a.ma_quyen')
          .select(Database.raw('distinct ma_quyen'))
          .as('ds')
      }).select(Database.raw('array_agg(ma_quyen::TEXT) as ds_quyen'))

      return result[0].ds_quyen
    } catch (error) {
      return null
    }
  }
}
