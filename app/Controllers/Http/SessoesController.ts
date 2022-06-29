import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'


export default class SessoesController {
  public async login({ request, auth, response }: HttpContextContract) {
    const email = request.input('email')
    const usuario = await Usuario.query().where('email', email).firstOrFail()

    const novoToken = await auth.use('api').generate(usuario, {
        expiresIn: '30mins',
      })
  
      const token = novoToken.token
  
      return response.status(200).json({ email, token })

  
  }
}