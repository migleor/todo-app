import { Tarea } from "./tarea.js";

class Tareas {
    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            listado.push( this._listado[key])
        });
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray( tareas = [] ){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea(desc=''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        this.listadoArr.forEach(({ desc, completadoEn}, index)=>{
            let completado = completadoEn;
            let indice = (index + 1).toString();
            (completado!==null) 
            ? console.log(`${indice.green} ${desc} :: ${'Completado'.green}`)
            : console.log(`${indice.red} ${desc} :: ${'Pendiente'.red}`)
        })

    }

    tareasByStatus(sw=true){
        let cont = 1;
        this.listadoArr.forEach(({ desc, completadoEn}) => {
            let completado = completadoEn;
            if(completado!==null && sw){
                console.log(`${cont.toString().green} ${desc} :: ${'Completado'.green}`);
                cont++;  
            }else if(!sw && completado===null){
                console.log(`${cont.toString().red} ${desc} :: ${'Pendiente'.red}`);
                cont++;
            }
        })
    }

}

export {Tareas}