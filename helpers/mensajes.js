import colors from 'colors';
import readline from 'readline';

const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log("=====================".green.bold);
        console.log("SELECCIONE UNA OPCION".green.bold);
        console.log("=====================\n".green.bold);
    
        console.log(`${ '1.'.green } Crear tarea`);
        console.log(`${ '2.'.green } Listar Tareas`);
        console.log(`${ '3.'.green } Listar Tareas Completadas`);
        console.log(`${ '4.'.green } Listar Tareas Pendientes`);
        console.log(`${ '5.'.green } Completar Tarea(s)`);
        console.log(`${ '6.'.green } Borrar Tarea`);
        console.log(`${ '0.'.green } Salir\n`);
    
    
        const rl = readline.createInterface({
            input: process.stdin,
            output:process.stdout
        })
    
        rl.question('Seleccione una opción: ', (opt) => {
            rl.close();
            resolve(opt)
        }) 
    })
}

const pause = () => {
    return new Promise(resolve =>{
        const rl = readline.createInterface({
            input: process.stdin,
            output:process.stdout
        });
    
        rl.question(`\n Presione [${ 'ENTER'.blue.bold }] para continuar...\n`, (opt) => {
            rl.close();
            resolve();
        })
    })
}


export { mostrarMenu, pause };