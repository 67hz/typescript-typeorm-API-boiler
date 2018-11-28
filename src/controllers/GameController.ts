import * as express from "express";
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

@controller("/games")
export class GameController implements interfaces.Controller {
  @httpGet("/")
  private index(req: express.Request, res: express.Response,
    next: express.NextFunction): express.Response {
    return res.status(200).json({message: "Hello, Dolly!"});
  }

}
