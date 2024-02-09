import mongoose from "mongoose";

const { Schema } = mongoose

const animalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    keeper: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
});

const animal = mongoose.model('Animal', animalSchema);

export default mongoose.model('animal', animalSchema);

