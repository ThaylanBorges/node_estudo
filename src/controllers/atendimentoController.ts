class AtendimentoController {
  bucar() {
    return "Buscando atendimento";
  }

  criar() {
    return "Criando atendimento";
  }

  atualizar(id: number) {
    return `Atualizando o atendimento de número: ${id}`;
  }

  deletar(id: number) {
    return `Apando o atendimento de número: ${id}`;
  }
}

export default AtendimentoController;
