import React, { useState } from 'react';
import { getContacto } from '../infraestructura/getContacto';
import {Contacto} from '../domain/Contacto';

function GetContacto() {
  const [id, setId] = useState('');
  const [contacto, setContacto] = useState<Contacto>();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data:Contacto|null = await getContacto(parseInt(id));
    if(data){
      setContacto(data);
    }
  };

  return (
    <div>
      <h2>Obtener contacto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={event => setId(event.target.value)} />
        </label>
        <button type="submit">Obtener</button>
      </form>
      {contacto && (
        <div>
          <p>{contacto.nombre} - {contacto.edad} - {contacto.email}</p>
        </div>
      )}
    </div>
  );
}

export default GetContacto;
