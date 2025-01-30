import conexao from "../database/conexao";

interface Atendimento {
  servico: string;
  cliente: string;
  status: string;
}

class AtendimentoModel {
  async listar() {
    const query = "SELECT * FROM atendimentos";

    try {
      const resultado = await conexao.query(query);
      return resultado.rows;
    } catch (error: any) {
      throw new Error("Erro ao listar atendimentos: " + error.message);
    }
  }

  async criar(dados: Atendimento) {
    const query = `
      INSERT INTO atendimentos(data, servico, cliente, status) 
      VALUES($1, $2, $3, $4) RETURNING *
    `;

    try {
      const resultado = await conexao.query(query, [
        new Date().toISOString(),
        dados.servico,
        dados.cliente,
        dados.status,
      ]);
      return resultado.rows[0];
    } catch (error: any) {
      throw new Error("Erro ao criar atendimento: " + error.message);
    }
  }

  async editar(dados: Atendimento, id: number) {
    const query = `
      UPDATE atendimentos SET data = $1, servico = $2, cliente = $3, status = $4 
      WHERE id = $5 RETURNING *
    `;

    try {
      const resultado = await conexao.query(query, [
        new Date().toISOString(),
        dados.servico,
        dados.cliente,
        dados.status,
        id,
      ]);

      if (resultado.rowCount === 0) {
        throw new Error(`Atendimento de id ${id} não encontrado`);
      }

      return resultado.rows[0];
    } catch (error: any) {
      throw new Error(`Erro ao editar atendimento: ` + error.message);
    }
  }

  async deletar(id: number) {
    const query = `
      DELETE FROM  atendimentos WHERE id = $1 RETURNING *
    `;

    try {
      const resultado = await conexao.query(query, [id]);

      if (resultado.rowCount === 0) {
        throw new Error(`Atendimento de id ${id} não encontrado`);
      }

      return resultado.rows[0];
    } catch (error: any) {
      throw new Error("Erro ao delatar atendimento: " + error.message);
    }
  }
}

export default AtendimentoModel;
