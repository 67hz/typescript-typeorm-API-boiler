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

/**
 * Using one controller to rule all: /games
 * this is based on a design assumption that event scoring is game-centric.
 */
@controller("/api/v1/games")
export class GameController implements interfaces.Controller {
  constructor(@inject(TYPES.GameService) private _gameService: GameService) {}

  // return all games
  @httpGet("/")
  private async index(req: express.Request, res: express.Response,
    next: express.NextFunction) {
    // console.log(this._gameService.test("service test"));

    const gamesFound = await this._gameService.findAll();
    return res.status(200).json(gamesFound);
  }

  @httpGet("/:id")
  public async getById(
    @response() res: express.Response,
    @requestParam("id") idParam: string
  ) {
    try {
      return await this._gameService.findById(idParam);
  } catch(e) {
      res.status(500);
      res.send(e.message);
    }
  }

  // @httpPost("/")
  // private async create(@request() req: express.Request,
  //   res: express.Response

}
