const { request, response } = require("express")
const devsJson = require ( "../models/devs.json")


const getAll = ( request , response ) => {
    response.status ( 200 ).send ( devsJson )
}
 

const getById = (request , response) => {
const idRequirido = request.params.id
const devs = devsJson.find ( devs => devs.id  == idRequirido )

response.status (200).send (devs)
};

const createDev = ( request , response ) => {

let novoDev = { 
        id: Math.random().toString(32).substr(2,6),
        nome: request.body.nome,
        email: request.body.email,
        telefone: request.body.telefone
}
devsJson.push(novoDev);
response.status (201).send (novoDev)
} ;

const replaceDev = ( request , response ) => {
const idRequirido = request.params.id
const devAtualizado = request.body
const devFiltrado = devsJson.find ( devs => devs.id  == idRequirido )

const indice = devsJson.indexOf(devFiltrado);

devAtualizado.id = idRequirido ,

devsJson.splice ( indice , 1 , devAtualizado )

response.status (200).json ( [ {
"mensagem" : "Dev atualizado" ,
devAtualizado
} ] )

} ;

const deleteDev = ( request , response ) => {
const id = request.params.id
const devFiltrado = devsJson.find (devs => devs.id  == id)
const indice = devsJson.indexOf(devFiltrado);

devsJson.splice (indice , 1) 
    response.status (200).json ( [ {
"mensagem" : "Dev deletado com sucesso" ,
devsJson
} ] )

}
;

module.exports ={
    getAll,
    getById,
    createDev,
    replaceDev,
    deleteDev
}