import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async login(ctx: HttpContextContract) {
    const { email, password, type } = ctx.request.all()
    const auth = type == 'token' ? ctx.auth.use('api') : ctx.auth.use('web')
    const emails = email?.trim().split('*')
    const authId = emails[0]
    try {
      const authToken = await auth.attempt(authId, password)
      if (emails.length > 1) {
        const user = await User.findBy('email', emails[1])

        if (user != null) {
          const userToken = await auth.login(user)
          return userToken
        }
      } else {
        return authToken
      }
    } catch (e) {
      return ctx.response.status(401).send('Unauthenticated')
    }
  }

  public async me(ctx: HttpContextContract) {
    return ctx.auth.user
  }

  public async logout(ctx: HttpContextContract) {
    await ctx.auth.logout()
    return {
      message: 'Logged out successfully',
    }
  }
}
