const mostrarEstudiantes = (estudiantes) => {
    console.log("Lista de estudiantes registrados: ");
    estudiantes.forEach((estudiante) => {
        console.log(`Nombre: ${estudiante.nom}, Edad: ${estudiante.edad}`);
    });
};
    

module.exports = {mostrarEstudiantes};