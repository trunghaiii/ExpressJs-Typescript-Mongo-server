import mongoose from "mongoose";

const mongooseConnection = async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);
        console.log('Connected to MongoDb')
    } catch (error) {
        console.log(error)
    }
}

export default mongooseConnection