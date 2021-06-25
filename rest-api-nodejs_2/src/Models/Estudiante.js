const { Schema, model } = require("mongoose");

const EstudiantesSchema = new Schema({
    nombre:  {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    materias: [
        {
            nombre : String,
            nota: Number,
            comentario: String
        }],
    activo: {
        type: Boolean,
        default: true
    }
});

module.exports = model("Estudiante",EstudiantesSchema);
