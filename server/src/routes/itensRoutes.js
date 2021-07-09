const controllers = require ( "../controllers/itensController.js" )
const express = require ( "express" ) ;
const roteador = express.Router()

roteador.get ("/todos/itens", controllers.getAll )
roteador.get ("/:id/item" , controllers.getById)
roteador.post ("/cadastrar/item" , controllers.createItens) ;


roteador.put ("/:id/item" , controllers.replaceItem ) ;

roteador.delete ("/:id/item" , controllers.deleteItem ) ;

module.exports = roteador