import { Router } from "express";
import { getContacto, getAllContactos, createContacto, deleteContacto } from "../controllers/contactoController";
const router = Router();

router.get('/',getAllContactos);
router.get('/:id', getContacto);
router.post('/', createContacto);
router.delete('/:id', deleteContacto);

module.exports=router;
