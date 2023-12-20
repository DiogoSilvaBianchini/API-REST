import mongoose from 'mongoose'

const conn = async () => {
    mongoose.connect(process.env.DB_CONECTION)
    
    return mongoose.connection
}

export default conn