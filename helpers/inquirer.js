import inquirer from 'inquirer';
import colors from 'colors';

const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [{
                value: '1',
                name: `${'1.'.green} Crear Tarea`
            },{
                value: '2',
                name: `${'2.'.green} Listar Tareas`
            },{
                value: '3',
                name: `${'3.'.green} Listar Tareas Completadas`
            },{
                value: '4',
                name: `${'4.'.green} Listar Tareas Pendientes`
            },{
                value: '5',
                name: `${'5.'.green} Completar Tarea(s)`
            },{
                value: '6',
                name: `${'6.'.green} Eliminar Tarea`
            },{
                value: '0',
                name: `${'0.'.green} Salir`
            }]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log("=============================================".green.bold);
    console.log("            SELECCIONE UNA OPCION".white.bold);
    console.log("=============================================\n".green.bold);
    const {opcion} = await inquirer.prompt(questions);
    return opcion;
}

const pause = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'pausa',
            message: `\n ${'>>>'.red} Presione [${'ENTER'.blue.bold}] para continuar \n`
        }
    ]);
}

const leerInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if(value.length === 0){
                    return 'Por favor ingrese la descripción de la tarea';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

export {
    inquirerMenu,
    pause,
    leerInput
};