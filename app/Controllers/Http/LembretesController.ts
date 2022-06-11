import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Lembrete from 'App/Models/Lembrete'
import { limpaCamposNulosDeObjeto } from 'App/Utils/Utils'
import { LembreteValidatorStore, LembreteValidatorUpdate } from 'App/Validators/LembreteValidator'

export default class LembretesController {
    public async index() {
        const lembrete = await Lembrete.all()

        return lembrete
    }

public async store({ request }: HttpContextContract) {
        const validateData = await request.validate(LembreteValidatorStore)
    
        const { titulo, descricao } = validateData
    
        const lembreteModel = await Lembrete.create({
          titulo,
          descricao,
        })
        return lembreteModel
      }
    
public async update({ request }: HttpContextContract) {
        const id = request.param('id')
        if (!id) return
    
        const validateData = await request.validate(LembreteValidatorUpdate)
    
        const lembrete = await Lembrete.findOrFail(id)
        lembrete.merge(limpaCamposNulosDeObjeto(validateData))
        await lembrete.save()
    
        return lembrete
      }

public async destroy({ request }: HttpContextContract) {

        const id = request.param('id')
        if (!id) return

        const lembrete = await Lembrete.findOrFail(id)
        await lembrete.delete()

        return lembrete
    }




}
