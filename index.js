//importar las dependencias
const express = require("express")
const cors = require("cors")
const morgan = require("morgan");
const conectarBD = require("./src/db/conexion");
require("dotenv").config();
conectarBD()

//inicializar express
const app = express()

//configuracion
const port=process.env.PORT || 4000

//middlewares
app.use(express.json())
app.use(morgan("combined"))
app.use(cors())

//rutas
app.use(require("./src/routes/userRouts"))
app.use(require("./src/routes/routsTask"))
app.use(require("./src/routes/auth.routes"))


//definir el puerto
app.listen(3000,()=>{
    console.log(`servidor corriendo en puerto ${port}`)
})


