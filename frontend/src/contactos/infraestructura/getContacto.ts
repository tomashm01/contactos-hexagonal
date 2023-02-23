import { Contacto } from "../domain/Contacto";
import {baseUrl} from "../../config";

export async function getContacto(id: number): Promise<Contacto | null> {
    const response = await fetch(`${baseUrl}/contactos/${id}`);
    if (response.status === 404) {
      return null;
    }
    return await response.json();
  }