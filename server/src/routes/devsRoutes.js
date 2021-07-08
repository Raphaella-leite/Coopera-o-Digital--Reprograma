const controllers = require ( "../controllers/devsController.js" )
const express = require ( "express" ) ;
const roteador = express.Router()

roteador.get ("/todos", controllers.getAll )
roteador.get ("/:id" , controllers.getById)
roteador.post ("/cadastrar" , controllers.createDev) ;


roteador.put ("/:id" , controllers.replaceDev ) ;

roteador.delete ("/:id" , controllers.deleteDev ) ;

module.exports = roteador