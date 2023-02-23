import { mySqlContactoRepository } from "contactos/infraestructure/database/mysql/mySqlContactoRepository";
import { Contacto } from "contactos/domain";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function getContacto(req,res): Promise<Contacto> {
    const id:string = req.params.id;
    const contacto:Contacto= await prisma.contactos.findUnique({
        where: {
            id: Number.parseInt(id,10)
        }
    });
    if(contacto)return res.status(200).send(contacto);
    return res.status(404).send("Contacto no encontrado");
}
export async function getAllContactos(req,res): Promise<Contacto[]> {
    const contactos:Contacto[] =await prisma.contactos.findMany();
    if(contactos.length>0)return res.status(200).send(contactos);
    return res.status(404).send("No hay contactos");
}
export async function createContacto(req,res): Promise<number>{
    const contacto:Contacto = req.body;
    const newContacto = await prisma.contactos.create({
        data: {
          nombre: contacto.nombre,
          edad: contacto.edad,
          email: contacto.email,
        },
      });
    if(newContacto)return res.status(200).send(newContacto);
    return res.status(404).send("Contacto no creado");
}

export async function deleteContacto(req,res): Promise<boolean> {
    const id:string = req.params.id;
    const borrado=await prisma.contactos.delete({
        where: {
            id: Number.parseInt(id,10)
        }
    });
    if(borrado)return res.status(200).send(true);
    return res.status(404).send(false);
}

module.exports = {getContacto, getAllContactos, createContacto, deleteContacto};