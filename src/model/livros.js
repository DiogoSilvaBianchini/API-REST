import mongoose from 'mongoose'
import { autoresSchema } from './autores.js'

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number},
    autor: autoresSchema
},{versionKey: false})

const livro = mongoose.model("livros", livroSchema)

export default livro