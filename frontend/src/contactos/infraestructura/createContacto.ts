import { Contacto } from "../domain/Contacto";
import {baseUrl} from "../../config";

export async function createContacto(contacto: Contacto): Promise<Contacto> {    
    const response = await fetch(`${baseUrl}/contactos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contacto),
    });
    return await response.json();
  }