import { Contacto } from "contactos/domain";

export interface mySqlContactoRepository {
    get(req): Promise<Contacto>;
    getAll(): Promise<Contacto[]>;
    create(req):Promise<number>;
    delete(req): Promise<void>;
}