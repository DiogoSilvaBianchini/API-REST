import express from 'express'
import AutorController from '../controllers/autoreController.js'

const router = express.Router()

router.get("/autor", AutorController.buscarAutores)
router.post("/autor", AutorController.criarAutor)
router.get("/autor/:id", AutorController.buscarAutorPorId)
router.put("/autor/:id", AutorController.atualizarAutor)
router.delete("/autor/:id", AutorController.removerAutor)

export default router