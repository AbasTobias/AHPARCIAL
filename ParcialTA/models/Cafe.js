import mongoose from 'mongoose';
const joi = require ('joi')
const cafeSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    origin: String,
    roast: String,
    category: String,
    weight: String,
}, { collection: 'cafes' }); 

const Cafe = mongoose.models.Cafe || mongoose.model('Cafe', cafeSchema);

export default Cafe;
