import express from "express";
import router from "./routes";
const app = express();
app.use(express.json());

router(app);

const port = 48003;
app.listen(port, (error) => {
  if (error) {
    console.log("Falha na conexão");
    return;
  }
  console.log(`Rodando na porta: ${port}`);
});
