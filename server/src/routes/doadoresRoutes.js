const  controllers  =  require ( "../controllers/doadoresController.js" )
const  express  =  require ( "express" ) ;

roteador.get ( "/" ,  controllers.getAll )
roteador.get ( "/: id" ,  controllers.getById )
roteador.post ( "/ cadastrar" ,  controllers.createTask ) ;

roteador.post ( "/ cadastrar" ,  controllers.createTask )
roteador.get ( "/" ,  controllers.getAll ) ;
roteador.get ( "/: id" ,  controllers.getById ) ;

roteador.delete ( "/: id" ,  controllers.deleteTask )
roteador.put ( "/: id" ,  controllers.replaceTask ) ;

module.exports =    roteador 
roteador.delete ( "/: id" ,  controllers.deleteTask ) ;

module.exports =   roteador ;