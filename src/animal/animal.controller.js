'use strict';

import Animal from './animal.model.js';


export const createA = async (req, res) => {
    try {
        let data = req.body;
        let animal = new Animal(data);
        await animal.save();
        return res.status(201).send({ message: 'Animal created successfully', animal });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error creating animal', error: err });
    }
};

export const getAllA = async (req, res) => {
    try {
        let animals = await Animal.find();
        return res.send({ animals });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error retrieving animals', error: err });
    }
};

export const updateA = async (req, res) => {
    try {
        let { id } = req.params;
        let data = req.body;
        let updatedAnimal = await Animal.findByIdAndUpdate(id, data, { new: true });
        if (!updatedAnimal) {
            return res.status(404).send({ message: 'Animal not found' });
        }
        return res.send({ message: 'Animal updated successfully', updatedAnimal });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error updating animal', error: err });
    }
};

export const deleteA = async (req, res) => {
    try {
        let { id } = req.params;
        let deletedAnimal = await Animal.findOneAndDelete(id);
        if (!deletedAnimal) {
            return res.status(404).send({ message: 'Animal not found' });
        }
        return res.send({ message: 'Animal deleted successfully', deletedAnimal });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error deleting animal', error: err });
    }
};