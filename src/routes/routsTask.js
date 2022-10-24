const router = require ("express").Router()

const {getTareaforUser,getTarea,postTarea,putTarea,deleteTarea}=require("../controllers/controllerTask")
const validaeJWT=require('../middleware/validarJWT')


router.get("/task/user",[validaeJWT],getTareaforUser)
router.get("/tareas",[validaeJWT],getTarea)
router.post("/task",[validaeJWT],postTarea)
router.put("/task/:idTask",[validaeJWT],putTarea)
router.delete("/task/:idTask",[validaeJWT],deleteTarea)


module.exports=router