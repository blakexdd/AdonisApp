/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

Route.get('/', 'MainsController.main');

Route.on('login').render('login');
Route.post('/login', 'AuthController.login');

Route.on('register').render('register');
Route.post('/register', 'AuthController.register');

Route.get('/logout', 'AuthController.logout');

Route.get('/currencies', 'CurrenciesController.get');
