const express = require('express')
const Planetas = require('../Data_base/Planetas')
const router = express.Router()

router.post('/inserir_planeta', async (res,req) => {
    try {
        const planeta = Planetas.create(req.body)

        return res.status(201).send({ planeta })
    }catch(err){
        return res.status(404).send({ erro: "Erro ao cadastrar Planeta" })
    }
})