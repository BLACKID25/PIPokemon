const { allpokemonapi } = require("./CallPokemonByApi") //! Llamamos a la consulta por la API.
const { dbPokemon } = require("./CallPokemonByBd") //! llamamos a la consulta por la BD.
const axios = require ("axios");


const pokemonAll = async () => {
    try {
        const callpokemonapi = await allpokemonapi() //! obtenemos los datos de la API

        const callpokemondb = await dbPokemon() //! obtenemos los datos de los DB

        const pokemonApiDb = callpokemondb ? [  //! creamos un objeto con todos los datos de base de dato + api
                ...callpokemonapi,
                ...callpokemondb
            ] : callpokemonapi ;

        return pokemonApiDb    
    } catch (e) {
        return  res.status(400).send('No se encontro Pokemosn con ese Nombre')
    }
}
module.exports = { pokemonAll };