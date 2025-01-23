import { Application } from "express";
import atendimentoRouter from "./atendimentosRouter";

export default (app: Application) => {
  app.use("/atendimentos", atendimentoRouter);
};
