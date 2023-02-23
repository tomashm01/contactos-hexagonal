import { ContactoRepository } from '../domain/contactoRepository';
import { Contacto } from '../domain/contacto';

export class GetContacto {

    constructor(private repository: ContactoRepository) { }

    async execute(id:number):Promise<Contacto> {
        return await this.repository.findById(id);
    }
}

module.exports = { GetContacto }