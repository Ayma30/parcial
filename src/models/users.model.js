const {Schema, model} = require("mongoose");

const Usermodel = new Schema({
    nombre: {
        type: String,
        min:4,
        max:16,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        min:8,
        max:16,
        required: true
    },
    isActive:{
        type: Boolean,
        default: true
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model("usuarios", Usermodel)