
const readlineSync = require('readline-sync');
const { mostrarEstudiantes } = require('./lista_estudiantes');

const registrarEstudiantes = () => {
    const cantEstudiantes = readlineSync.question("Ingrese la cant de estudiantes a registrar: ")
    const estudiantes = [];

    for(let i = 0; i < cantEstudiantes; i++){
        
       const nom = readlineSync.question(`Ingrese el nombre del estudiante ${i} : `)
        
       const edad = readlineSync.question(`Ingrese la edad de ${i}: `)
        
        const estudiante = {
            nom,
            edad
        };;
        estudiantes.push(estudiante); 
    }
    
 mostrarEstudiantes(estudiantes);
};


registrarEstudiantes();