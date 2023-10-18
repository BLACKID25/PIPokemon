const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getRouterPokemon = require("./getRouterPokemon")
const getRouterTypes = require("./getRouterTypes")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons" , getRouterPokemon)  // aca llamo todas las rutas / pokemons


router.use("/types" , getRouterTypes)

module.exports = router;
