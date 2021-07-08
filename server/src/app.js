const  express  =  require ("express")
const  app  =  express()


app.use (express.json() )  
  

const índice =  require ("./routes/devsRoutes.js")


app.use ("/" ,  índice)

module.exports =  app ;