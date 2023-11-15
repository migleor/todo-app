import { writeFileSync, readFileSync, existsSync } from 'node:fs';

const nameFile = 'tareas.json';
const path = `./db/${nameFile}`;

const createFileDB = ( data ) => {
    writeFileSync(path, JSON.stringify(data));    
}

const readFile = ( ) => {
    if(!existsSync( path )){
        return null;
    }
    const info = readFileSync(path, { encoding: 'utf-8' });
    const data = JSON.parse(info); 
    return data;
}

export { createFileDB, readFile }