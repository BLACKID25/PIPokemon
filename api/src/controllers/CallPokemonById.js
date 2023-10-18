const axios = require ("axios");
const { Card_pokemon, Type} = require("../db")


try {
    if (id.includes('-')) { //! validamos si incluye " - ", son Pokemon de la BD
       
        pokemonDetail = await Card_pokemon.findOne({
            where: {
                ID: id,
                createdInDB: true,
                },
            include: Type, // Incluimos los datos del tipo asociado al Pokémon
        })
    }
} catch(e){
    return res.status(400).send({e: e.message})
}