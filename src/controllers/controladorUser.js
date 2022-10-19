
const User = require("../models/users.model")
const bcrypt=require("bcrypt")
const ctrlUser = {}


ctrlUser.getUser = async (req, res) => {
    try {
        const user = await User.find()
        if(!user.length){
            return res.json({message:"no se encontro usuario"})
        }
        return res.status(200).json({
            message: "usuario encontrado con exito",
            user
        })

    } catch (error) {

    }
}
ctrlUser.postUser = async (req, res) => {
    try {
        const {
            usuario,
            correo,
            password
        } = req.body

        const newpassword=bcrypt.hashSync(password,10)
        const valida=await User.findOne({correo:correo})
        if(valida){
            return res.json({message:"el correo ya existe"})
        }
        const validaU=await User.findOne({usuario:usuario})
        if(validaU){
            return res.json({message:"el usuario ya existe"})
        }
        const newUser = new User({
            usuario,
            correo,
            password:newpassword
        })
        const user = await newUser.save()
        return res.json({
            message: "usuario creado correctamente",
            user
        })

    } catch (error) {

    }
}
ctrlUser.putUser = async (req, res) => {
    try {
        const id=req.params.idUser
        const {usuario,password,correo}=req.body
        const user=await User.findById(id)

        await user.updateOne({usuario,correo,password})
        return res.json({message:"usuario actualizado correctamente"})



    } catch (error) {

    }
}
ctrlUser.deleteUser = async (req, res) => {
    const id= req.params.idUser
    try {
       const user=await User.findByIdAndUpdate(id,{isActive:false})
       return res.json({message:"usuario borrado"})
    } catch (error) {
return res.json({error:error.message})
    }
}






module.exports = ctrlUser