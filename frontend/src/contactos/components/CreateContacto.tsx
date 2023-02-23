import { useState } from "react";
import { Contacto } from "../domain/Contacto";
import {createContacto} from "../infraestructura/createContacto";

export default function CreateContacto() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [email, setEmail] = useState("");
  const [newContacto, setNewContacto] = useState(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newContacto:Contacto|null=await createContacto({nombre, edad, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear contacto</h2>
      <label htmlFor="nombre">Nombre:</label>
      <input
        id="nombre"
        type="text"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
        required
      />
      <br />
      <label htmlFor="edad">Edad:</label>
      <input
        id="edad"
        type="number"
        value={edad}
        onChange={(event) => setEdad(Number(event.target.value))}
        required
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <br />
      <button type="submit">Crear</button>
    </form>
  );
}
