const axios = require('axios');
const URL = "https://pokeapi.co/api/v2/type"
const {Type} = require("../db")

const pokemonType = async (req, res) => {
    try {

 
        const petTypes = await axios.get(URL);
        const TypePokemon = petTypes.data.results.map((type) => {
          return {
            name: type.name,
          };
        });
    
        const createPromises = TypePokemon.map(async (eleme) => {
          try {
            await Type.findOrCreate({
              where: {
                name: eleme.name,
              },
            });
          } catch (error) {
            console.error(`Error creating type: ${eleme.name}`, error);
          }
        });
    
        await Promise.all(createPromises);
    
        return { message: "Types created or already exist in the database." };
      } catch (error) {
        console.error({ error: "No types available on Data Base" });
      }
    }

module.exports = { pokemonType }