import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Currencies extends BaseSchema {
  protected tableName = 'currencies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('base').unique().notNullable();
      table.jsonb('data').notNullable();
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
