import express from 'express'
import LivrosController from '../controllers/livrosController.js'

const routes = express.Router()

routes.get("/livros", LivrosController.pegarLivros)
routes.get("/livros/busca", LivrosController.buscarPorEditora)
routes.get("/livros/:id", LivrosController.pegarLivro)
routes.post("/livros", LivrosController.cadastrarLivro)
routes.put("/livros/:id", LivrosController.atualizarLivro)
routes.delete("/livros/:id", LivrosController.deletarLivro)

export default routes