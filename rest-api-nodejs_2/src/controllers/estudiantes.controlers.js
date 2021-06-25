const Estudiante = require("../Models/Estudiante");

//get
exports.obtener = async (req, res) => {
try {
  const estudiantes = await Estudiante.find({activo:true});
  res.json(estudiantes);
} catch (error) {
  res.json(error);
}
};

//post
exports.agregar = async (req, res) => {

  try {
    const { nombre, correo, materias} = req.body;
    if (nombre && correo) {
      const nuevoEstudiante = new Estudiante({nombre, correo,materias});    
      console.log("nuevoEstudiante",nuevoEstudiante);
      await nuevoEstudiante.save();      
      res.json({msj: "documento insertado de forma satisfactoria", id: nuevoEstudiante._id  });
    } else {
      res.json({isOk: false, msj: "Los datos son requeridos"});
    }   

  } catch (error) {
    console.log("error")
    res.json(error)
  }
};

exports.actualizar = async  (req, res) => {
 
  try {
    const id = req.params.id; 
    const data = req.body;

    if (id && data) {
      await Estudiante.findByIdAndUpdate(id, data );
      res.json("Registro actualizado.");
    } else {
      res.json({msj: "Datos insuficientes"})
    }
 

  } catch (error) {
    res.json(error);
  } 
};

exports.eliminar = async (req, res) => {
 try {
  const id = req.params.id;
  console.log(id);
  const eliminado = await Estudiante.findByIdAndUpdate(id, {activo: false}  )
  res.status(200).json( { msj: "Dato borrado de forma satisfactoria", isOk: true } );
 } catch (error) {
  res.status(500).json(error);
 }
};
