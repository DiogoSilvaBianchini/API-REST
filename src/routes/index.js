import express from 'express'
import bookRoutes from './livrosRoutes.js'
import autorRoutes from './autorRoutes.js'


const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Curso de Node.js"))
    app.use(express.json(), autorRoutes, bookRoutes)
}

export default routes