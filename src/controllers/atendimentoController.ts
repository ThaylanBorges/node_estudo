import AtendimentoModel from "../models/atendimentoModel";
const atendimentoModel = new AtendimentoModel();

class AtendimentoController {
  async buscar() {
    return await atendimentoModel.listar();
  }

  async criar(data: Date, servico: string, cliente: string, status: string) {
    return await atendimentoModel.criar(data, servico, cliente, status);
  }

  atualizar(id: number) {
    return `Atualizando o atendimento de número: ${id}`;
  }

  deletar(id: number) {
    return `Apando o atendimento de número: ${id}`;
  }
}

export default AtendimentoController;
