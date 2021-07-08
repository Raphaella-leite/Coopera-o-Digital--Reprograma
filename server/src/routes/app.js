const  express  =  require ( "express" )
const  app  =  express ( )
const  cors  =  require ( "cors" )


app.use ( cors ( ) )  
app.use ( express.json ( ) )  
  

const índice =  require ( "./routes/devsRoutes.js" )
const tarefas  =  exigir ( "./routes/devsRoutes.js" ) 


app.use ( "/" ,  índice )
app.use ( "/ tarefas" ,  tarefas )

module.exports =  app ;