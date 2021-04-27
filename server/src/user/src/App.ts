import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { router } from './routes';

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
    // prod
    // const url = "mongodb+srv://admin:coderslab2021@cluster0.fxn5y.mongodb.net/coderslab";

    // dev
    const url = "mongodb+srv://admin:coderslab2021@cluster0.lzv8b.mongodb.net/coderslab";

    let options = {
      poolSize: 5,
      ssl: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }

    mongoose.connect(url, options);
    mongoose.set('useCreateIndex', true);

    mongoose.connection.on('error', () => {
      console.log("Erro na conexão com o banco de dados");
    });

    mongoose.connection.on('disconnect', () => {
      console.log("Aplicação desconectada do banco de dados");
    });

    mongoose.connection.on("connected", () => {
      console.log("Aplicação conectada ao banco de dados");
    });
  }

  private routes(): void {
    this.express.use(router);
  }
}

export default new App().express;