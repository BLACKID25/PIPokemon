const { Pokemon, Type} = require("../db")
const axios = require ("axios");



const dbPokemon = async () =>{
    try {
        //! Consultamos a la base de datos con todo sus atributos + Types
        const pokemons = await Pokemon.findAll({ include: [{model:Type}]});

        //!luego retornamos los pokemon en un nuevo arreglo 
        return pokemons.map((elem)=>{
            return{
                id : elem.id,
                name : elem.name,
                hp : elem.hp,
                attack : elem.attack,
                defense : elem.defense,
                speed : elem.speed,
                weight: elem.height,
                height: elem.weight,
                image : elem.image, 
                types: elem.types.map((t)=>t.name),
                createdInDb: elem.createdInDb
            }
        })
    } catch (e) {
        return  res.status(500).send('No Existe Pokemon en Base de Dato')
    }
}

module.exports={dbPokemon}