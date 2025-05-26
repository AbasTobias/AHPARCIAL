import mongoose from 'mongoose';
const cafeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    price: Number,
    description: String,
    origin: String,
    roast: String,
    category: String,
    weight: String,
}, { collection: 'cafes' }); 

const Cafe = mongoose.models.Cafe || mongoose.model('Cafe', cafeSchema);

export default Cafe;
