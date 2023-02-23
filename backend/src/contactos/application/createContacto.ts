import { ContactoRepository } from '../domain/contactoRepository';
import { Contacto } from '../domain/contacto';

export class CreateContacto {

    constructor(private repository: ContactoRepository) { }

    async execute(contacto: Contacto):Promise<number> {
        return await this.repository.create(contacto);
    }
}

module.exports = { CreateContacto }