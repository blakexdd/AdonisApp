import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CurrenciesController {
  public async get({auth, response}: HttpContextContract){
      const authenticated = await auth.check();

      if (!authenticated){
        response.status(401).send('Login First');
      }else{
        response.send("Here should be currency info");
      }
    }
}
