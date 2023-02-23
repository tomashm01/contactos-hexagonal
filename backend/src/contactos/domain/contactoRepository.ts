import { Contacto } from './contacto';
export interface ContactoRepository {
    create(contacto: Contacto): Promise<number>;
    delete(contacto: Contacto): Promise<void>;
    findAll(): Promise<Contacto[]>;
    findById(id: number): Promise<Contacto>;
}
