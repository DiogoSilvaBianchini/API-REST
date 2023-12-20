import { autor } from "../model/autores.js";
import livro from "../model/livros.js";

class LivrosController{
    static async pegarLivros(req,res){
        try {
            const listarLivros = await livro.find({})
            res.status(200).json(listarLivros)
        } catch (error) {
            console.error("Erro ao listar livros" + error.message)
            res.status(500).json({message: "Erro ao listar livros, tente novamente mais tarde!"})
        }
    }

    static async pegarLivro(req,res){
        try {
            const id = req.params.id
            const buscarLivro = await livro.findById(id)
            res.status(200).json({message: buscarLivro})
        } catch (error) {
            console.error("Erro ao encontrar livro: " + error.message)
            res.status(501).json({message: "Erro na requisição do livro!"})
        }
    }

    static async atualizarLivro(req,res){
        try {
            const id = req.params.id
            await livro.findOneAndUpdate({_id: id}, req.body)
            res.status(200).json({message: "Livro atualizado"})
        } catch (error) {
            console.error("Erro ao atulizar livro: " + error.message)
            res.status(501).json({message: "Erro ao atualizar livro!"})
        }
    }

    static async cadastrarLivro(req,res){
        try {
            const retgistroDoLivro = req.body
            const autorDoLivro = await autor.findOne({name: req.body.autor})

            const novoLivro = {
                ...retgistroDoLivro, autor: {...autorDoLivro._doc}
            }

            const criarLivro = await livro.create(novoLivro)
            res.status(201).json({message: "Novo livro cadastrado!", criarLivro})
        } catch (error) {
            console.error("Erro ao cadastrar o livro: " + error.message)
            res.status(501).json({message: "Erro ao cadastrar o livro, tente novamente mais tarde!"})
        }
    }

    static async deletarLivro(req,res){
        try {
            const id = req.params.id
            await livro.findOneAndDelete({_id: id})
            res.status(200).json({message: "Livro deletado"})
        } catch (error) {
            console.error("Algo deu errado ao deletar o livro:" + error.message)
            res.status(500).json({message: "Algo deu errado ao deletar o livro"})
        }
    }

    static async buscarPorEditora(req,res){
        const search = req.query.editora
        try {
            const searchBooksForEditora = await livro.find({editora: search})
            res.status(200).json({livros: searchBooksForEditora})
        } catch (error) {
            console.error("Algo deu errado ao buscar os livros:" + error.message)
            res.status(500).json({message: "Algo deu errado ao buscar os livro"})
        }
    }
}

export default LivrosController