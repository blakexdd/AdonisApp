import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

/**
 * It's not clear where do am i supposed to use this
 * kind of data, but it doesn't look like that creating
 * properties for each currency isn't optimal, because
 * maybe we will have to drop some of currencies, or add
 * and in this case this kind of structure will be useless,
 * in other hand current structure isn't good for quering,
 * but idk if we supposed to do it
 */
export default class Currency extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public base: string

  @column()
  public data: Object

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
