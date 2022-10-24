const router = require ("express").Router()

const {getUser,postUser,putUser,deleteUser}=require("../controllers/controladorUser")

const validaeJWT=require('../middleware/validarJWT')

router.get("/user",[validaeJWT],getUser)
router.post("/user",postUser)
router.put("/user/:idUser",[validaeJWT],putUser)
router.delete("/user/:idUser",[validaeJWT],deleteUser)








module.exports=router