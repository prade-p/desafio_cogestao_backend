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
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

//Usuarios
Route.get('/usuarios', 'UsuariosController.index')
Route.post('/usuarios', 'UsuariosController.store')
Route.put('/usuarios/:id', 'UsuariosController.update')
Route.delete('/usuarios/:id', 'UsuariosController.destroy')

//Login
Route.post('/login', 'SessoesController.login')

//Lembretes
Route.get('/lembretes', 'LembretesController.index')
Route.get('/lembretesusuario/:id', 'LembretesController.indexByUsuario')
Route.post('/lembretes', 'LembretesController.store')
Route.put('/lembretes/:id', 'LembretesController.update')
Route.delete('/lembretes/:id', 'LembretesController.destroy')