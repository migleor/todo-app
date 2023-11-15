import colors from 'colors';
import { 
    inquirerMenu,
    pause,
    leerInput,
    menuTareasBorrar,
    confirm,
    menuTareasUpdate
} from './helpers/inquirer.js';
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
            
            case '5':
                const ids = await menuTareasUpdate(tareas.listadoArr);
                tareas.toogleStatusTask(ids);
                console.log('Tareas actualizadas exitosamente'.green);
            break;

            case '6':
                const idDel = await menuTareasBorrar(tareas.listadoArr);
                if(idDel!=='0'){
                    const ok = await confirm('Realmente desea eliminar la tarea?'.red);
                    if(ok){
                        console.log(idDel);
                        tareas.deleteTask(idDel);
                        console.log('Tarea eliminada exitosamente'.green)
                    }
                }
            break;

        }

        createFileDB( tareas.listadoArr );

        if(opt !== '0') await pause();

    } while(opt !== '0');
}
main();