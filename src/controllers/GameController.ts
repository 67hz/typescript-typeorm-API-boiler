import * as express from "express";
import { TYPES } from "../constants/types";
import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  httpDelete,
  request,
  requestParam,
  queryParam,
  response
} from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { GameService } from "../services/GameService"

@controller("/api/v1/games")
export class GameController implements interfaces.Controller {
  constructor(@inject(TYPES.GameService) private _gameService: GameService) {}

  @httpGet("/")
  private async index(req: express.Request, res: express.Response,
    next: express.NextFunction) {
    console.log(this._gameService.test("service test"));

    const gamesFound = await this._gameService.findAll();
    return res.status(200).json(gamesFound);
  }

  // @httpPost("/")
  // private async create(@request()

}
