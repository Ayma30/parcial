const mongoose = require("mongoose")

const conectarBD = () => {
    mongoose.connect(process.env.URI)
        .then(() => console.log("Base de datos conectada"))
        .catch((error) => console.log(`Ha ocurrido un error: ${error}`))

}

module.exports = conectarBD