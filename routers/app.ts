import Route from '@ioc:Adonis/Core/Route'
import { authRoute } from './auth'
import { demoRoute } from './demo'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  authRoute()
  demoRoute()
}).prefix('api')
