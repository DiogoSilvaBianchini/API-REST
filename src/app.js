import "dotenv/config"
import express from 'express'
import conn from './config/dbConnect.js'
import routes from "./routes/index.js"

const app = express()
const PORT = 3000

const conection = await conn()

conection.on("error", (erro) => {
    console.error("Erro de conexão:", erro)
})

conection.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!")
})

routes(app)

app.listen(PORT, () => {
    console.log("https://localhost:" + PORT)
})