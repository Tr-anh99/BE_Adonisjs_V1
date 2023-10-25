import Route from '@ioc:Adonis/Core/Route'
import { authRoute } from './auth'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  authRoute()
}).prefix('api')
