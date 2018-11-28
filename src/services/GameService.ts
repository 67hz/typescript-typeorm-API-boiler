import {injectable, inject} from "inversify";
// import { Game } from "../repositories/GameRepository";
import { TYPES } from "../constants/types";
import "reflect-metadata";

// @TODO define interface?

@injectable()
export class GameService {
  public test(str: string): string {
    return str;
  }

}
