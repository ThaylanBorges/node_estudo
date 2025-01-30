import express from "express";
import atendimentoRouter from "./routes/atendimentosRouter";

const app = express();
app.use(express.json());
app.use("/atendimentos", atendimentoRouter);

const port = 48003;
app.listen(port, (error) => {
  if (error) {
    console.log("Falha na conexão");
    return;
  }
  console.log(`Rodando na porta: ${port}`);
});
