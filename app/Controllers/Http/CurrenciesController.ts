import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from 'axios';
import Currency from "App/Models/Currency";

export default class CurrenciesController {
  public async get({auth, response}: HttpContextContract){
      const authenticated = await auth.check();
      const baseCurrency = 'RUB';

      if (!authenticated){
        response.status(401).send('Login First');
      }else{
        const res = await axios.get('https://api.exchangeratesapi.io/latest',
          {
            params: {
              base: baseCurrency
            }
          });
        const rates = res.data.rates;

        const currency = new Currency();
        currency.data = rates;
        currency.base = baseCurrency;

        await currency.save();

        response.json(rates);
      }
    }
}
