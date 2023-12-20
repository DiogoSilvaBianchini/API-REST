import { autor } from '../model/autores.js'

class AutorController{
    static async buscarAutores(req,res){
        try {
            const listaAutores = await autor.find({})
            res.status(200).json({listaAutores})
        } catch (error) {
            console.error("Algo deu errado ao buscar autores: " + error.message)
            res.status(500).json({message: "Algo deu errado ao buscar autores!"})
        }
    }

    static async buscarAutorPorId(req,res){
        try {
            const buscarAutor = await autor.findById(req.params.id)
            res.status(200).json({buscarAutor})
        } catch (error) {
            console.error("Algo deu errado ao buscar autor: " + error.message)
            res.status(500).json({message: "Algo deu errado ao buscar autor!"})
        }
    }

    static async criarAutor(req,res){
        try {
            await autor.create(req.body)
            res.status(201).json({message: "Autor criado com sucesso!"})
        } catch (error) {
            console.error("Algo deu errado ao criar autore: " + error)
            res.status(500).json({message: "Algo deu errado ao criar autor, tente novamente mais tarde!"})
        }
    }

    static async atualizarAutor(req,res){
        try {
            const id = req.params.id
            await autor.findByIdAndUpdate({_id: id}, req.body)
            res.status(200).json({message: "Autor atualizado com sucesso!", autor: {id, campoAtualizaddo: req.body}})
        } catch (error) {
            console.error("Algo deu errado ao atualizar o autor: " + error.message)
            res.status(500).json({message: "Erro ao atualizar autor, tente novamente mais tarde!"})
        }
    }

    static async removerAutor(req,res){
        try {
            const id = req.params.id
            const autorDeletado = await autor.findByIdAndDelete({_id: id})
            res.status(200).json({message: "Autor removido com sucesso!", autorDeletado})
        } catch (error) {
            console.error("Algo deu errado ao remover o autor: " + error.message)
            res.status(500).json({message: "Erro ao remover autor, tente novamente mais tarde!"})
        }
    }
}

export default AutorController