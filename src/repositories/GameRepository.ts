import "reflect-metadata";
import { injectable } from "inversify";
import { EntityRepository, Repository } from "typeorm"
import { Game } from "../entities/Game";
import { GameModel } from "../models/Game";




// @EntityRepository(Game)
@injectable()
export class GameRepository {

  public async findAll(): Promise<Array<GameModel>> {
    return await this.findAll();
  }

  public foo(str: string): string {
    return "hello, world!" + " " + str;
  }

}

// export function getRepository() {
//   const conn = getConnection();
//   return conn.getRepository(Game);
// }
