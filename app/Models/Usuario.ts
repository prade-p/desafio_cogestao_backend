import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'
import Lembrete from './Lembrete'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @beforeCreate()
  public static async createUUID (model:Usuario){
    model.id = uuid()
    
  }

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public token_usuario?: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Lembrete, {
    foreignKey: 'id_usuario'
  })
  public lembrete: HasMany<typeof Lembrete>




}
