import {baseUrl} from "../../config";

export async function deleteContacto(id: number): Promise<boolean> {
    const response = await fetch(`${baseUrl}/contactos/${id}`, {
      method: "DELETE",
    });
    if (response.status === 404) {
      return false;
    }
    return true;
}
