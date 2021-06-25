const express = require('express');
const morgan = require("morgan");
const conexionDB = require("./db.conexion")
const routerEstudiantes = require('./routes/estudiantes.routes');
const routerMaterias = require("./routes/materias.routes");
const app = express();
// const port = 3000;

// conexión BD
conexionDB();
// setting
app.set("name","rest-api-nodejs_2");
app.set("port", process.env.port || 3500);

// middleware
app.use(express.json());
app.use(morgan( "dev"));


//Llamado de rutas
app.use(express.static("public"));
app.use('/api/estudiantes', routerEstudiantes);
app.use('/api/materias', routerMaterias);


module.exports = app;