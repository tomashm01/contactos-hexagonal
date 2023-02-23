import express from "express";
import cors from "cors";
require("dotenv").config();

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use("/contactos", require("./contactos/infraestructure/server/routes/contactoRouter"));


app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
