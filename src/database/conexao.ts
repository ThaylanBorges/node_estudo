import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "150963",
  database: "controle_atendimento",
});

client.connect();

export default client;
