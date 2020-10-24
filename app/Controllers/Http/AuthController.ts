import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';
import {schema, rules} from "@ioc:Adonis/Core/Validator";

export default class AuthController {
  public async register({request, response, auth}: HttpContextContract){

    /**
     * Fields validation details
     */
    const validationSchema = schema.create({
      email: schema.string({trim: true},
        [
          rules.email(),
          rules.unique({table: 'users', column: 'email'}),
        ]),
      password: schema.string({trim: true},
        [
          rules.confirmed(),
        ]),
    });

    /**
     * Validating users data
     */
    const registeredUser = await request.validate({
      schema: validationSchema,
    });

    /**
     * Creating user
     */
    const user: User = new User();
    user.email = registeredUser.email;
    user.password = registeredUser.password;
    await user.save();

    /**
     * Log in into system and redirecting
     * to the page showing private content
     */
    await auth.login(user);
    response.redirect('/currencies');
  }
}
