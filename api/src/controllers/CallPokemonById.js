const axios = require ("axios");
const { Pokemon, Type} = require("../db")


try {
    if (id.includes('-')) { //! validamos si incluye " - ", son Pokemon de la BD
       
        pokemonDetail = await Pokemon.findOne({
            where: {
                id: id,
                createdInDB: true,
                },
            include: Type, // Incluimos los datos del tipo asociado al Pokémon
        })
    }
} catch(e){
    return res.status(400).send({error: e.message})
}