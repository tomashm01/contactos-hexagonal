import { ContactoRepository } from '../domain/contactoRepository';

export class DeleteContactoById {

    constructor(private repository: ContactoRepository) { }

    async execute(id: number): Promise<void> {
        const contacto = await this.repository.findById(id);
        if (!contacto) throw new Error("Contacto no encontrado");
        await this.repository.delete(contacto);
    }
}

module.exports = { DeleteContactoById }