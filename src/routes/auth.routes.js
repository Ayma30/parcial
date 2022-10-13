const { registrarse } = require("../controllers/auth.controllers");

const router = require("express").Router()


router.post("/registrarse", registrarse)

module.exports = router;