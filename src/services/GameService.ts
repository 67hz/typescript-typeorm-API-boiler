import {injectable, inject} from "inversify";
import { getCustomRepository } from "typeorm";
import { GameModel } from "../models/Game";
import { GameRepository } from "../repositories/GameRepository";
import { TYPES } from "../constants/types";
import "reflect-metadata";

// @TODO define interface?

@injectable()
export class GameService {
  @inject(TYPES.GameRepository)
  private _gameRepository: GameRepository;

  public test(str: string): string {
    return this._gameRepository.bar(str);
  }

  // public async findAll(): Promise<Array<GameModel>> {
  //   let results = this._gameRepository.findGame(id: string);
  //   let results = this._gameRepository.findGame(id: string);
  //   return await results;
  //   // return JSON.stringify(results);
  // }

}
