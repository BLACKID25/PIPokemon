const axios = require ("axios");
const { Card_pokemon, Type} = require("../db")
const imagendefault = '../Imagen/ImagenGenerica.jpg'

const createNewPokemon = async (info) =>{
    const newPokemon = await Card_pokemon.create({
    Nombre: info.name,
    Vida: info.hp,
    Ataque: info.attack,
    Defensa: info.defense,
    Velocidad: info.speed,
    Altura: info.height,
    Peso: info.weight,
    Imagen: info.image
      ? info.image // si tiene imagen se utiliza
      : imagendefault, // si no imagen subida por defecto
      
  });
    // Buscar los tipos en la base de datos
    const foundTypes = await Type.findAll({
      where: {
        name: info.types
      }
    });

    // Relacionar el pokemon con los tipos encontrados
    await newPokemon.addTypes(foundTypes);
}
module.exports = { createNewPokemon }