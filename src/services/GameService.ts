import {injectable, inject} from "inversify";
import { getCustomRepository } from "typeorm";
import { GameRepository } from "../repositories/GameRepository";
import { TYPES } from "../constants/types";
import "reflect-metadata";

// @TODO define interface?

@injectable()
export class GameService {
  @inject(TYPES.GameRepository)
  private _gameRepository: GameRepository;

  public test(str: string): string{
    return this._gameRepository.foo(str);
  }

}
