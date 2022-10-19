const {
    Schema,
    model,
    SchemaType
} = require("mongoose")

const newTask = new Schema({

    titulo: {
        type: String
    },
    descripcion: {
        type: String
    },
    estado: {
        type: String
    },
    isActive:{
        type:Boolean,
        default:true
    },
    role: {
        type: String,
        default:'default_user'
    },

    idUser: {
        type:Schema.ObjectId,
        ref:'usuarios',
        required:true
    }







})


module.exports = model("tarea", newTask)