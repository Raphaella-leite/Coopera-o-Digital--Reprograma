const { request, response } = require("express")
const doadoresJson = require ( "../models/doadores.json")


const getAll = ( request , response ) => {
    response.status ( 200 ).send ( doadoresJson )
}
 

const getById = (request , response) => {
const idRequirido = request.params.id
const doadores = doadoresJson.find ( doadores => doadores.id  == idRequirido )

response.status (200).send (doadores)
};

const createDoadores = ( request , response ) => {

let novoDoador = { 
        id: Math.random().toString(32).substr(2,6),
        nome: request.body.nome,
        email: request.body.email,
        telefone: request.body.telefone
}
doadoresJson.push(novoDoador);
response.status (201).send (novoDoador)
} ;

const replaceDoador = ( request , response ) => {
const idRequirido = request.params.id
const doadorAtualizado = request.body
const doadorFiltrado = doadoresJson.find (doadores => doadores.id  == idRequirido )

const indice = doadoresJson.indexOf(doadorFiltrado);

doadorAtualizado.id = idRequirido ,

doadoresJson.splice ( indice , 1 , doadorAtualizado )

response.status (200).json ( [ {
"mensagem" : "Doador atualizado" ,
doadorAtualizado
} ] )

} ;

const deleteDoador = ( request , response ) => {
const id = request.params.id
const doadorFiltrado = doadoresJson.find (doadores => doadores.id  == id)
const indice = doadoresJson.indexOf(doadorFiltrado);

doadoresJson.splice (indice , 1) 
    response.status (200).json ( [ {
"mensagem" : "Doador deletado com sucesso" ,
doadoresJson
} ] )

}
;

module.exports ={
    getAll,
    getById,
    createDoadores,
    replaceDoador,
    deleteDoador
}