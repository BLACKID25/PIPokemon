const { Router } = require('express');
const router = Router()
const { Type } = require("../db");
const { pokemonType } = require('../controllers/CallPokemonType');

router.get("/", async(req,res)=>{
    try {
        await pokemonType()

        const allTypes = await Type.findAll();
       return  res.status(200).json(allTypes);
       
    } catch (error) {
        res.status(400).send(error.toString())
        console.log(e, "Error en el controller getTypes");
    }
})
module.exports=router;