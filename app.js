import colors from 'colors';
import { inquirerMenu, pause, leerInput } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';
import { createFileDB, readFile } from './helpers/manageFiles.js';
import { Tarea } from './models/tarea.js';

const main = async() => {
    let opt = '';
    
    const tareas = new Tareas();
    const tareasFile = readFile();
    if(tareasFile){
        tareas.cargarTareasFromArray(tareasFile);
    }

    do{
        opt = await inquirerMenu();

        switch(opt){
            case '1':
                //crear tarea
                const desc = await leerInput('Deescripción de la Tarea: ');
                tareas.crearTarea(desc);
            break;

            case '2':
                tareas.listadoCompleto();
            break;

            case '3':
                tareas.tareasByStatus(true);
            break;

            case '4':
                tareas.tareasByStatus(false);
            break;            

        }

        createFileDB( tareas.listadoArr );

        if(opt !== '0') await pause();

    } while(opt !== '0');
}
main();