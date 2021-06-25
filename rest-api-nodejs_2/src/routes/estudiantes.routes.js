const {Router} = require ('express');
const ctrEst = require ("../controllers/estudiantes.controlers");
const routerEstudiantes = Router();
// GET
routerEstudiantes.get('/', ctrEst.obtener)
 
 // POST
 routerEstudiantes.post('/', ctrEst.agregar )

//  ACUTALIZAR
routerEstudiantes.put('/:id', ctrEst.actualizar)
 // DELETE
 routerEstudiantes.delete('/:id', ctrEst.eliminar)

 module.exports = routerEstudiantes;
 