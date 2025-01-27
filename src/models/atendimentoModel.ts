import conexao from "../database/conexao";

class AtendimentoModel {
  async listar() {
    const query = "SELECT * FROM atendimentos;";

    try {
      const resultado = await conexao.query(query);
      return resultado.rows;
    } catch (error: any) {
      throw new Error("Erro ao listar atendimentos");
    }
  }

  async criar(data: Date, servico: string, cliente: string, status: string) {
    const query = `INSERT INTO atendimentos(data, servico, cliente, status) VALUES(${data}, ${servico}, ${cliente}, ${status})`;

    try {
      const resultado = await conexao.query(query);
      return "Atendimento criado";
    } catch (error: any) {
      throw new Error("Erro ao criar atendimento");
    }
  }
}

export default AtendimentoModel;
