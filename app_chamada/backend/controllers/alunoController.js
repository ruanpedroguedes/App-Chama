const Aluno = require('../models/Aluno')

exports.getAllAluno = async (req, res) => {
    try {
      const alunos = await Aluno.find()
      res.json(alunos)    
    } catch (err) {
      res.status(500).json({message: err.message})    
    }      
}

exports.createAluno = async (req, res) => {
    const { name, description, location, photo } = req.body
    const newAluno = new Aluno({ name, description, location, photo })
    
    try {
      const saveAluno = await newAluno.save()
      res.status(201).json(saveAluno)    
    } catch (err) {
      res.status(400).json({ message: err.message })    
    }      
}

exports.updateAluno = async (req, res) => {
   try {
     const updateAluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true })
     res.json(updateAluno)     
   } catch (err) {
     res.status(400).json({ message: err.message })    
   }       
}

exports.deleteAluno = async (req, res) => {
   try {
     await Aluno.findByIdAndDelete(req.params.id)
     res.json({message: 'Aluno deletado'} )     
   } catch (err) {
     res.status(500).json({ message: err.message })     
   }       
}