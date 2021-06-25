const Estudiante = require("../Models/Estudiante");
const guardarArchivo = require("../utils/guardar-archivo");
const agregarArchivo = require("../utils/guardar-archivo");

exports.obtener = async (req, res) => {
try {
  const estudiantes = await Estudiante.find({activo:true});
  res.json(estudiantes);
} catch (error) {
  res.json(error);
}
};

exports.agregar = async (req, res) => {

if (req.files) {
  //llama al método
  const resp = await guardarArchivo(req.files, "expediente", "application/pdf" );
  const nombreExpediente = resp.nuevoNombre;
  if (resp.isOk) {
    

    
  try {
    const { nombre, correo, materias } = req.body;
    console.log(nombre);

    if (nombre && correo) {
      const nuevoEstudiante = new Estudiante({ nombre, correo, materias, nombreExpediente });    
      await nuevoEstudiante.save();
    res.json({msj: "documento insertado de forma satisfactoria", id: nuevoEstudiante._id  });
    } else {
      res.json({isOk: false, msj: "Los datos son requeridos"});
    }   

  } catch (error) {
    res.json(error)
  }

  



  } else {
    res.json({error: resp.error})
  }

} else {
  res.json({error: "Debe adjuntar el expediente del estudiante en pdf"})
}



};

exports.actualizar = async  (req, res) => {
 
  try {
    const id = req.params.id; 
    const data = req.body;

    if (id && data) {
      await Estudiante.findByIdAndUpdate(id, data );
      res.json("REgistro actualizado.");
    } else {
      res.json({msj: "DAtos insuficientes"})
    }
 

  } catch (error) {
    res.json(error);
  } 
  
 
};

exports.eliminar = async (req, res) => {
 try {
  const id = req.params.id;
  console.log(id);
  const eliminaddo = await Estudiante.findByIdAndUpdate(id, {activo: false}  )
  res.status(200).json( { msj: "Dato borrado de forma satisfactoria", isOk: true } );
 } catch (error) {
  res.status(500).json(error);
 }
};
