//Levantar servidor HTTP (express)
//ESModules
'use strict'

//Importaciones
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import {config} from "dotenv"
import userRoutes from '../src/user/user.routes.js'


//Configuraciones
const app = express()
config();
const port = process.env.PORT || 3056


//Configuracion del servidor
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors()) //Aceptar o denegar Solicitudes de diferentes origenes (local, remoto)
app.use(helmet()) //Aplica capa de seguridad basica
app.use(morgan('dev')) //Logs de solicitudes al servidor


//Declaracion de rutas
app.use(userRoutes)


//Levantar el servidor
export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}
