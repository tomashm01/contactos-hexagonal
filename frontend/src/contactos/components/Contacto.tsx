import CreateContacto from "./CreateContacto";
import DeleteContacto from "./DeleteContacto";
import GetAllContacto from "./GetAllContacto";
import GetContacto from "./GetContacto";

function Contacto() {
  return (
    <>
        <GetAllContacto />
        <CreateContacto />
        <GetContacto />
        <DeleteContacto />
    </>
  );
}

export default Contacto;
