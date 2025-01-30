import { Router } from "express";
import AtendimentoController from "../controllers/atendimentoController";
const atendimentoController = new AtendimentoController();

const router = Router();

router.get("/", atendimentoController.buscar);

router.post("/", atendimentoController.criar);

router.put("/:id", atendimentoController.atualizar);

router.delete("/:id", atendimentoController.deletar);

export default router;
