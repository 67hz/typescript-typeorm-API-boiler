import * as express from "express";
import { Request, Response } from "express";
import { createConnection, getConnection } from "typeorm";
import * as bodyParser from "body-parser";
import { Game } from "./entities/Game";

class App {

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public app: express.Application;


  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    const router = express.Router();

    router.get("/", (req: Request, res: Response) => {
      res.status(200).send({
        message: "hello, Dolly!"
      });
    });

    router.get("/game", (req: Request, res: Response) => {
      // tseting connection -> #TODO move this to repository
      createConnection().then( () => {
        return getConnection().getRepository(Game).find();
      });
    });

    router.post("/", (req: Request, res: Response) => {
      const data = req.body;

      // query db and save data
      res.status(200).send(data);
    });

    this.app.use("/", router)
  }

}

export default new App().app;
