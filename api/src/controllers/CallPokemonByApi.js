const axios = require ("axios");

const urlApi = "https://pokeapi.co/api/v2/pokemon"

"https://pokeapi.co/api/v2/pokemon?offset=0&limit=40"

const allpokemonapi = async () => {
    try {
        const allpokemon = await axios.get(urlApi); //! llamamos a la api por axios 

        const allpokename = allpokemon.data.results //! lista de nombre de los pokemons
        
        const response = await Promise.all ( //! realiza varias solicitudes simultaneas y sus detalles
            allpokename.map(async nameind => {
                const info = await axios.get (nameind.url)
                return{
                    id:info.data.id,
                    name:info.data.name,
                    hp: info.data.stats[0].base_stat,
                    attack: info.data.stats[1].base_stat,
                    defense: info.data.stats[2].base_stat,
                    speed: info.data.stats[5].base_stat,
                    height: info.data.height,
                    weight: info.data.weight,
                    image: info.data.sprites.other.dream_world.front_default,
                    types: info.data.types.map((type) => type.type.name),
                }
            } )
        )
        return response        
                
    } catch (error) {
        console.error("Error al traer los pokemones desde los controllers");
    }
}

module.exports = {allpokemonapi}



// //2) Pedir info a la API
// const {data} =  await axios.get(BASE_URL)
// const dataResult = await data.results
// const getDetailsFromURL = await Promise.all(dataResult.map(async(pokemon) => {
//    const pokemonDetails = await axios.get(pokemon.url)
//    return pokemonMap(pokemonDetails.data)

// }) )