import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MainsController {
  public async main({auth, view}: HttpContextContract){
    const authenticated = await auth.check();

    return view.render('welcome', {authenticated});
  }
}
