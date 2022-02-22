module.exports = app => {

  // instancia a classe e o router para as rotas
  const user = require('../controllers/user.controller.js')
  const router = require('express').Router()

  // Retorna todos os usuários
  router.get('/', user.getAll)
  // Faz inserção dos dados
  router.post('/', user.create)
  // Obtem por id
  router.get('/:id', user.getById)
  // Atualiza por id
  router.patch('/:id', user.updateById)
  // Exclui por id
  router.delete('/:id', user.removeById)
  // Deleta todos
  router.delete('/', user.removeAll)
  
  app.use('/api/v1/users', router)

}