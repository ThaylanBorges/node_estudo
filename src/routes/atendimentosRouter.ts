import { Router } from "express";
import AtendimentoController from "../controllers/atendimentoController";
const atendimentoController = new AtendimentoController();
const router = Router();

router.get("/", (req, res) => {
  const resposta = atendimentoController.bucar();
  res.send(resposta);
});

router.post("/", (req, res) => {
  res.send("Criando um atendimento atendimento");
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Atualizando o atendimento de id: ${id}`);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Apafando o atendimento de id: ${id}`);
});

export default router;
