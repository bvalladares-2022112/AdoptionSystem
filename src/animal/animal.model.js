import mongoose from "mongoose";

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
        type: Schema.ObjectId,
        ref: 'user',
        required: true
    }
});

export default mongoose.model('animal', animalSchema);

