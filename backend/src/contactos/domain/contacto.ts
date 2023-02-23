export class Contacto{

    id: number;
    nombre: string;
    edad: number;
    email: string;

    constructor(id: number, nombre: string, edad: number, email: string){
        this.id = id;
        this.nombre = nombre;
        if(edad < 0 || edad > 120) throw new Error("Edad fuera de rango");
        else this.edad = edad;
        this.email = email;
    }

}