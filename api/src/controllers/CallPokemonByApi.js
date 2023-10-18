const axios = require ("axios");

const urlApi = "https://pokeapi.co/api/v2/pokemon"

const allpokemonapi = async () => {
    try {
        const allpokemon = await axios.get(urlApi); //! llamamos a la api por axios 

        const allpokename = allpokemon.data.results //! lista de nombre de los pokemons
        
        const response = await Promise.all ( //! realiza varias solicitudes simultaneas y sus detalles
            allpokename.map(async nameind => {
                const info = await axios.get (nameind.url)
                return{
                    ID:info.data.id,
                    Nombre:info.data.name,
                    Vida: info.data.stats[0].base_stat,
                    Ataque: info.data.stats[1].base_stat,
                    Defensa: info.data.stats[2].base_stat,
                    Velocidad: info.data.stats[5].base_stat,
                    Altura: info.data.height,
                    Peso: info.data.weight,
                    Imagen: info.data.sprites.other.dream_world.front_default,
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