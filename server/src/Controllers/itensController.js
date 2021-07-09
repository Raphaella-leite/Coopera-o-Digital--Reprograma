const { request, response } = require("express")
const itensJson = require ( "../models/itens.json")


const getAll = ( request , response ) => {
    response.status (200).send ( itensJson )
}
 

const getById = (request , response) => {
const idRequirido = request.params.id
const itens = itensJson.find ( itens => itens.id  == idRequirido )

response.status (200).send (itens)
};

const createItens = ( request , response ) => {

let novoItem = { 
        id: Math.random().toString(32).substr(2,6),
        nome: request.body.nome,
}
itensJson.push(novoItem);
response.status (201).send (novoItem)
} ;

const replaceItem = ( request , response ) => {
const idRequirido = request.params.id
const itemAtualizado = request.body
const itemFiltrado = itensJson.find ( itens => itens.id  == idRequirido )

const indice = itensJson.indexOf(itemFiltrado);

itemAtualizado.id = idRequirido ,

itensJson.splice ( indice , 1 , itemAtualizado )

response.status (200).json ( [ {
"mensagem" : "Item atualizado" ,
itemAtualizado
} ] )

} ;

const deleteItem = ( request , response ) => {
const id = request.params.id
const itemFiltrado = itensJson.find (itens => itens.id  == id)
const indice = itensJson.indexOf(itemFiltrado);

itensJson.splice (indice , 1) 
    response.status (200).json ( [ {
"mensagem" : "Item deletado com sucesso" ,
itensJson
} ] )

}
;

module.exports ={
    getAll,
    getById,
    createItens,
    replaceItem,
    deleteItem
}