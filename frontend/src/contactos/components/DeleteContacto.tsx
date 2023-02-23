import React from "react";
import { deleteContacto } from "../infraestructura/deleteContacto";
import { useState } from 'react';

function DeleteContacto() {
  const [id, setId] = useState(0);

  const handleClick = async (event: any) => {
    event.preventDefault();
    const deletedContacto=await deleteContacto(event.target.id.value);

    if(deletedContacto){
      alert("Contacto eliminado");
    }else{
      alert("Contacto no encontrado");
    }
  };

  return (
    <>
      <h2>Eliminar contacto</h2>
      <form onSubmit={handleClick}>
        <label htmlFor="id">Id:</label>
        <input
          id="id"
          type="number"
          value={id}
          onChange={(event) => (setId(Number(event.target.value)))}
          required
        />
        <br />
        <button type="submit">Eliminar</button>
      </form>
    </>
  );
}

export default DeleteContacto;
