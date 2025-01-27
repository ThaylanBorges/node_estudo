import { Router } from "express";
import AtendimentoController from "../controllers/atendimentoController";
const atendimentoController = new AtendimentoController();

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const resposta = await atendimentoController.buscar();
    res.status(200).json(resposta);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  const data = new Date();
  const servico = "Cabelo e barba";
  const cliente = "Thiago";
  const status = "ativo";

  try {
    const resposta = atendimentoController.criar(
      data,
      servico,
      cliente,
      status
    );
    res.status(200).json(resposta);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const resposta = atendimentoController.atualizar(Number(id));
  res.send(resposta);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const resposta = atendimentoController.deletar(Number(id));
  res.send(resposta);
});

export default router;
