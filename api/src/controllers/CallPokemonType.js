const axios = require('axios');
const URL = "https://pokeapi.co/api/v2/type"
const {Type} = require("../db")

const pokemonType = async (req, res) => {

    try {
        const typesInDB = await Type.findAll();

        if (typesInDB.length === 0) {
                // Si la base de datos está vacía, obtener tipos de la API y guardar en la base de datos
                const infoUrl = await axios.get(URL)
                const typesFromAPI = infoUrl.data.results;
                    console.log(typesFromAPI)
            await Type.bulkCreate(typesFromAPI);
        }
    
             // Obtener tipos desde la base de datos
    
            //  const allTypes = await Type.findAll();
            //  res.status(200).json(allTypes);
    } catch (error) {
        res.status(500).send('SERVER ERROR');
    }
}

module.exports = { pokemonType }