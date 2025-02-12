CREATE TYPE atendimento_status AS ENUM ('ativo', 'realizado', 'cancelado');

CREATE TABLE IF NOT EXISTS atendimentos (
    id SERIAL PRIMARY KEY,
    data VARCHAR(100),
    servico VARCHAR(100),
    cliente VARCHAR(100),
    status atendimento_status DEFAULT 'ativo'
);