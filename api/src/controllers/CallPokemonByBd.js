const { Card_pokemon, Type} = require("../db")
const axios = require ("axios");



const dbPokemon = async () =>{
    try {
        //! Consultamos a la base de datos con todo sus atributos + Types
        const pokemons = await Card_pokemon.findAll({ include: [{model:Type}]});

        //!luego retornamos los pokemon en un nuevo arreglo 
        return pokemons.map((elem)=>{
            return{
                ID : elem.id,
                Nombre : elem.name,
                Vida : elem.hp,
                Ataque : elem.attack,
                defense : elem.defense,
                Velocidad : elem.speed,
                Peso: elem.height,
                Altura: elem.weight,
                Imagen : elem.image, 
                types: elem.types.map((t)=>t.name),
                createdInDb: elem.createdInDb
            }
        })
    } catch (e) {
        return  res.status(500).send('No Existe Pokemon en Base de Dato')
    }
}

module.exports={dbPokemon}