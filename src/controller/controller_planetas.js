const express = require('express')
const Planetas = require('../Data_base/Planetas')
const router = express.Router()

router.post('/inserir_planeta', async (req, res) => {
    const { Nome } = req.body
    try {

        if (await Planetas.findOne({Nome})){
            return res.status(400).send({erro: "Planeta já cadastrado"})
        }

        const planeta = await Planetas.create(req.body)
        return res.send({ planeta })
    }catch(err){
        return res.status(400).send({ erro: "Erro ao cadastrar Planeta" })
    }
})

module.exports = app => app.use('/planeta', router)