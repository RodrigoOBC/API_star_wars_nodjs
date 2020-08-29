const express = require('express')
const Planetas = require('../Data_base/Planetas')
const router = express.Router()

router.post('/inserir_planeta', async (req, res) => {
    const { Nome } = req.body
    const { planeta_id } = req.body
    try {

        if (await Planetas.findOne({ Nome })) {
            return res.status(400).send({ erro: "Planeta já cadastrado" })
        }

        if (await Planetas.findOne({ planeta_id })) {
            return res.status(400).send({ erro: "Planeta já cadastrado" })
        }

        const planeta = await Planetas.create(req.body)
        return res.send({ planeta })
    } catch (err) {
        return res.status(400).send({ erro: "Erro ao cadastrar Planeta" })
    }
})

router.get('/buscar_planeta', async (req, res) => {
    try {
        const planeta = await Planetas.find()
        if (planeta) {
            return res.status(201).send({ planeta })
        }
        else {
            return res.status(201).send({ erro: "Planeta não encontrado" })
        }
    } catch (err) {

        return res.status(400).send({ erro: "Erro ao encontrar Planeta" })
    }
})

router.get('/buscar_planeta/:NomePlaneta', async (req, res) => {
    try {
        const planeta = await Planetas.findOne({ Nome: req.params.NomePlaneta })
        if (planeta) {
            return res.status(201).send({ planeta })
        }
        else {
            return res.status(201).send({ erro: "Planeta não encontrado" })
        }
    } catch (err) {

        return res.status(400).send({ erro: "Erro ao encontrar Planeta" })
    }
})


router.get('/:IDPlaneta', async (req, res) => {
    try {
        const planeta = await Planetas.findOne({planeta_id: req.params.IDPlaneta})
        if (planeta){
            return res.status(201).send({planeta})
        }
        else {
            return res.status(201).send({erro: "Planeta não encontrado"})
        }
    }catch(err){
        return res.status(400).send({ erro: "Erro ao encontrar Planeta" })
    }
})


router.delete('/deletar_planeta/:IDPlaneta', async (req, res) => {
    try {
        const planeta = await Planetas.findOne({ planeta_id: req.params.IDPlaneta })
        if (planeta) {
            await Planetas.remove({ planeta_id: req.params.IDPlaneta })
            return res.status(201).send({ status: "Deletado com sucesso" })
        }
        else {
            return res.status(201).send({ erro: "Planeta não encontrado" })
        }
    } catch (err) {

        return res.status(400).send({ erro: "Erro ao encontrar Planeta" })
    }
})



module.exports = app => app.use('/planeta', router)