
const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea"
};

const completado = {
    default: true,
    alias: "c",
    desc: "marca como completado o pendiente la tarea"
}

const argv = require("yargs")

    .command('crear', 'Crear tarea', {
        descripcion
    })

    .command('actualizar', 'Actualizar tarea', {
        descripcion,
        completado
    })

    .command('borrar', 'borrar tarea', {
        descripcion
    })
    .help()
    .argv;

    module.exports={
        argv
    }