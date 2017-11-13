import { historiaClinica } from './historiaClinica';

export class Paciente{
    nombre:string;
    cedula:string;
    genero:string;
    administracion:string;
    edad:number;
    his:historiaClinica;
    constructor(nombre:string,cedula:string,
        genero:string,administracion:string,
        edad:number, his:historiaClinica){        }
}