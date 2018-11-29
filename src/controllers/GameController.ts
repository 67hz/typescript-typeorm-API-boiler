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
  private index(req: express.Request, res: express.Response,
    next: express.NextFunction): express.Response {
    console.log(this._gameService.test("service test"));

    // console.log(JSON.stringify(this._gameService.findAll()));
    return res.status(200).json({message: "all games"});
  }

  // @httpPost("/")
  // private async create(@request()

}
