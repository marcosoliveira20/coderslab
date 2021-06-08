import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import { RoadmapRoutes } from "./routes";

dotenv.config();
class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {
    const options = {
      poolSize: 5,
      ssl: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    };

    mongoose.connect(process.env.URL_MONGO_PROD, options);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useFindAndModify", false);

    mongoose.connection.on("error", () => {
      console.log("Erro na conexão com o banco de dados");
    });

    mongoose.connection.on("disconnect", () => {
      console.log("Aplicação desconectada do banco de dados");
    });

    mongoose.connection.on("connected", () => {
      console.log("Aplicação conectada ao banco de dados");
    });
  }

  private routes(): void {
    this.express.use(RoadmapRoutes);
  }
}

export default new App().express;
