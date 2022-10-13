//importar las dependencias
const express = require("express")
const cors = require("cors")
const morgan = require("morgan");
const conectarBD = require("./src/db/conexion");
require("dotenv").config();
conectarBD()

//inicializar express
const app = express()

//middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

//rutas
app.use(require("./src/routes/auth.routes"))


//definir el puerto
app.listen(3000)


