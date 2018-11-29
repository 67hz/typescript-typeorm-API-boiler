import {injectable, inject} from "inversify";
import { getCustomRepository } from "typeorm";
import { GameModel } from "../models/Game";
import { Game } from "../entities/Game";
import { GameRepository } from "../repositories/GameRepository";
import { TYPES } from "../constants/types";
import "reflect-metadata";

// @TODO define interface?

@injectable()
export class GameService {
  @inject(TYPES.GameRepository)
  private _gameRepository: GameRepository;

  public test(str: string): string {
    return this._gameRepository.test(str);
  }

  public async findAll(): Promise<Array<Game>> {

    let results = this._gameRepository.findGame();
    return await results;
  }

  public async findById(gameId: string): Promise<Array<Game>> {
    let game = this._gameRepository.findById(gameId);
    return await game;
  }


}
