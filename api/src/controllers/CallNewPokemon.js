const axios = require ("axios");
const { Pokemon, Type} = require("../db")


const createNewPokemon = async (info) =>{
    const newPokemon = await Pokemon.create({
    name: info.name,
    hp: info.hp,
    attack: info.attack,
    defense: info.defense,
    speed: info.speed,
    height: info.height,
    weight: info.weight,
    image: info.img
      ? info.img // si tiene imagen se utiliza
      :"https://i.pinimg.com/564x/de/58/96/de589691fd5c9850a6671a2f5456afba.jpg", // si no imagen subida por defecto
      
  });
    // // Buscar los tipos en la base de datos
    // const foundTypes = await Type.findAll({
    //   where: {
    //     Nombre: info.types
    //   }
    // });

    // Relacionar el pokemon con los tipos encontrados
    newPokemon.addType(info.types);;
}
module.exports = { createNewPokemon }