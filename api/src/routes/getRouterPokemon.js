const { Router } = require('express');
const { pokemonAll } = require("../controllers/CallAllPokemon")
const {createNewPokemon} = require("../controllers/CallNewPokemon")
const { Card_pokemon, Type } = require("../db") //* importamos los modelos
const urlApi = "https://pokeapi.co/api/v2/pokemon"
const router = Router()

//? 1 era Ruta GET /pokemons para obtener la información de los pokemons

// router.get('/', async (req, res) => {
//     try {
//       // Obtener todos los pokemons de la base de datos
//       const pokemons = await Card_pokemon.findAll();
  
//       // Devolver los pokemons como respuesta
//       res.status(200).json(pokemons);
//     } catch (error) {
      
//       res.status(400).send({ error: 'Ocurrió un error al obtener los pokemons' });
//     }
//   });


//? 2 da  Ruta GET /pokemons/:idPokemon para obtener el detalle de un pokemon por params

router.get('/:id', async (req, res) => {
    
  const { id } = req.params;
  const allpokemon = await pokemonAll() //! HAcemos la consulta en BD y API

   // Validación del id
   if (!id) {
    return res.status(400).send({ error: 'Pokémon ID not provided in the Params' });
  }

  try {
        //!consultamos el Id en la Base de Datos
       
    if (id) {
        const okPokemon = await allpokemon.filter((ele)=> ele.ID==id)
        if(okPokemon.length>0){
            return res.status(200).json(okPokemon)
        } else { 
            return res.status(400).send("No se encontro Pokemon")
        }
    } 
  } catch (error) {
   
    return res.status(400).json({ error: 'Ocurrió un error al obtener el detalle del pokemon' });
  }
});


//? 3 Ruta GET /pokemons/name?="..." para buscar pokemons por nombre Query
router.get('/', async (req, res) => {
    
    const { name } = req.query;
    const allpokemon = await pokemonAll() //! HAcemos la consulta en BD y API
    try {
        //! requerimos por nombre con un filter
        if (name) {
             const pokemonsDB = await allpokemon.filter((ele) => ele.Nombre === name.toLowerCase())
  
             if (pokemonsDB.length > 0) {
                //! Si se encontraron pokemons en la base de datos, se utilizan esos
                    return res.status(200).json(pokemonsDB);
                } else {
                     return res.status(400).json("Nombre Proporcionado no existe")
                    }
        } else {
            //! si no hay nada que enviar entonces mandar todos los registros
            return res.status(200).json(allpokemon)
        }
    } catch (e) {
            return res.status(400).json({e:"No se logra extraer la información"})
            }
});



//?  4 Ruta POST /pokemons para crear un nuevo pokemon por BODY

router.post("/", async(req,res)=>{
    try {
        await createNewPokemon(req.body) //! llamamos la funcion donde creamos nuestro pokemon
        return res.status(200).json('Se creo correctamente')
    } catch (error) {
        return res.status(400).json({e:"No se crea nuevo Pokemon"})
    }
})

module.exports = router;

