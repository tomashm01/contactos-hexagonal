import React, { useState, useEffect } from 'react';
import { getAllContacto } from '../infraestructura/getAllContacto';
import {Contacto} from '../domain/Contacto';

function GetAllContacto() {
  const [contactos, setContactos] = useState<Contacto[]>([]);

  useEffect(() => {
    const fetchContactos = async () => {
      const data = await getAllContacto();
      setContactos(data);
    };

    fetchContactos();
  }, []);

  return (
    <div>
      <h2>Contactos</h2>
      <ul>
        {contactos.map(contacto => (
          <li key={contacto.id}>
            ID {contacto.id}: {contacto.nombre} - {contacto.edad} - {contacto.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetAllContacto;
