import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // Conexión a MongoDB 
        await mongoose.connect('mongodb+srv://tobiasabas:VcFvLnAPeLYnz2hi@cluster0.xppqydo.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB conectado');
    } catch {
        process.exit(1); 
    }
};

export default connectDB;
