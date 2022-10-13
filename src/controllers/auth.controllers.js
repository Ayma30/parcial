const ctrl = {}
const Usermodel = require("../models/users.model")
const bcrypt = require("bcrypt")

ctrl.registrarse = async(req, res)=>{
    const {nombre, correo, contraseña} = req.body

    const nuevaContraseña = bcrypt.hashSync(contraseña, 10)


    const user = new Usermodel({
        nombre, correo, contraseña: nuevaContraseña
    })

    const guardar = await user.save()

    res.json(guardar)
}


module.exports = ctrl;