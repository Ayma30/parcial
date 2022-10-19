const router = require ("express").Router()

const {getTarea,postTarea,putTarea,deleteTarea}=require("../controllers/controllerTask")
const validaeJWT=require('../middleware/validarJWT')


router.get("/task",[validaeJWT],getTarea)
router.post("/task",[validaeJWT],postTarea)
router.put("/task/:idTask",[validaeJWT],putTarea)
router.delete("/task/:idTask",[validaeJWT],deleteTarea)


module.exports=router