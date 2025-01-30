import { Request, Response } from "express";
import AtendimentoModel from "../models/atendimentoModel";
const atendimentoModel = new AtendimentoModel();

class AtendimentoController {
  async buscar(req: Request, res: Response) {
    try {
      const atendimentos = await atendimentoModel.listar();
      res.status(200).json(atendimentos);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }

  async criar(req: Request, res: Response) {
    const dados = req.body;

    try {
      const criarAtendimento = await atendimentoModel.criar(dados);
      res.status(201).json(criarAtendimento);
    } catch (error: any) {
      res.status(401).json(error.message);
    }
  }

  async atualizar(req: Request, res: Response) {
    const { id } = req.params;
    const dados = req.body;

    try {
      const atualizarAtendimento = await atendimentoModel.editar(
        dados,
        Number(id)
      );
      res.status(200).json(atualizarAtendimento);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }

  async deletar(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const resposta = await atendimentoModel.deletar(Number(id));
      res.status(200).json(resposta);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
}

export default AtendimentoController;
