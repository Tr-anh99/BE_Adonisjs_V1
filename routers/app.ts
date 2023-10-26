import Route from '@ioc:Adonis/Core/Route'
import { authRoute } from './auth'
import { demoRoute } from './demo'
import { quanTriRoute } from './quantri'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  authRoute()
  demoRoute()
  quanTriRoute()
}).prefix('api')
