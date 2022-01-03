const express = require('express');
const router =  express.Router();
const Cadastro = require('../models/database')

//BUSCA POR TODOS OS REGISTROS 
router.get('/', async (req, res)=>{
    try{
        const login = await Cadastro.find()
        res.json(login)
    }catch(error){
        res.status(404).json({message:error.message})
    }
})
//BUSCA POR ID 
router.get('/:id', getCadastro, (req, res)=>{
    res.json(res.cadastro)
})
//CADASTRO 
router.post('/', async (req, res)=>{
        const cadastro = new Cadastro({
        
            Nome: req.body.Nome,
            Cpf: req.body.Cpf,
            DataNascimento: req.body.DataNascimento
        })
   
    
    try{
        const newCadastro = await cadastro.save()
        res.status(201).json(newCadastro)
    }catch(error){
        res.status(400).json({message: error.message})
    }
})
//ALTERA REGISTRO
router.patch('/:id',getCadastro,async(req, res)=>{
    if(req.body.Nome != null){
        res.cadastro.Nome = req.body.Nome;
    }
    if(req.body.Cpf != null){
        res.cadastro.Cpf = req.body.Cpf
    }
    if(req.body.DataNascimento != null){
        res.cadastro.DataNascimento = req.body.DataNascimento
    }
    try{
        const updateCadastro = await res.cadastro.save()
        res.json(updateCadastro)
    }catch(error){
        res.status(404).json({message: error.message})
    }
})
//DELETA REGISTRO
router.delete('/:id',getCadastro,async(req, res)=>{
    try{
        const cadastro = await res.cadastro.remove()
        res.json({message:'Registro removido com sucesso'})
    }catch(error){
        res.status(400).json({message: error.message})
    }
})
//VERIFICANDO SE ID EXISTE
async function getCadastro(req, res, next) {
    try {
        cadastros = await Cadastro.findById(req.params.id)
        if(cadastros == null){
            return res.status(404).json({message:error.message})
        }
    }catch(error){
        return res.status(500).json({message: 'Registro não encontrado!'})
    }
    res.cadastro = cadastros;
    next()
}
module.exports = router;