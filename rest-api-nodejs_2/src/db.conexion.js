const mongoose = require('mongoose');

const conexionDB = async () => {
    try {
        const DB = mongoose.connect('mongodb://localhost:27017/test-estudiantes', {useNewUrlParser: true, useUnifiedTopology: true});        
        console.log("Conexión satisfactoria", (await DB).connection.name);
    } catch (error) {
        console.log("Error", error);
    }
};
module.exports = conexionDB;
