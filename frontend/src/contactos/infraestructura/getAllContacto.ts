import { Contacto } from "../domain/Contacto";
import {baseUrl} from "../../config";

export async function getAllContacto(): Promise<Contacto[]> {
  const response = await fetch(`${baseUrl}/contactos`);
  return await response.json();
}
