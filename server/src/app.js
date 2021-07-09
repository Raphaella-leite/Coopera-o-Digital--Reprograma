const  express  = require ("express")
const  app  =  express()


app.use (express.json() )  
  

const índice =  require ("./routes/devsRoutes.js")
const doadores = require ("./routes/doadoresRoutes.js")
const itens = require ("./routes/itensRoutes.js")

app.use ("/" ,  índice)
app.use ("/" ,  doadores)
app.use ("/" ,  itens)


module.exports =  app ;