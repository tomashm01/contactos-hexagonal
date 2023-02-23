import { ContactoRepository } from '../domain/contactoRepository';
import { Contacto } from '../domain/contacto';

export class GetContactos {

    constructor(private repository: ContactoRepository) { }

    async execute():Promise<Contacto[]> {
        return await this.repository.findAll();
    }
}

module.exports = { GetContactos }