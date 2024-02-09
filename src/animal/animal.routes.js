import express from 'express'
import { createA, getAllA, updateA, deleteA } from './animal.controller.js';

const api = express.Router();


api.post('/createA', createA)
api.post('/getAllA', getAllA)
api.put('/updateA/:id', updateA)
api.delete('/deleteA/:id', deleteA)


export default api