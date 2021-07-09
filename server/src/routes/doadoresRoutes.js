const controllers = require ("../controllers/doadoresController")
const express = require ("express") ;
const roteador = express.Router()

roteador.get ("/todos/doadores", controllers.getAll )
roteador.get ("/:id/doadores" , controllers.getById)
roteador.post ("/cadastrar/doadores" , controllers.createDoadores) ;


roteador.put ("/:id/doadores" , controllers.replaceDoador ) ;

roteador.delete ("/:id/doadores" , controllers.deleteDoador ) ;

module.exports = roteador