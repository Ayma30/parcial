const {Schema, model} = require("mongoose");

const Usermodel = new Schema({
    usuario: {
        type: String,
        min:4,
        max:16,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        min:8,
        max:16,
        required: true
    },
    isActive:{
        type: Boolean,
        default: true
    },role: {
        type: String,
        default:'default_user'
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model("usuarios", Usermodel)