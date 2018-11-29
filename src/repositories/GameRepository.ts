import "reflect-metadata";
import { injectable } from "inversify";
import { 
  EntityRepository,
  Repository,
  getConnection,
  getCustomRepository
} from "typeorm"
import { Game } from "../entities/Game";
import { GameModel } from "../models/Game";




// @injectable()
@EntityRepository(Game)
export class GameRepository extends Repository<Game>{

  public async findGame(): Promise<Array<Game>> {
    const allGames = await this.find({ select: ["start", "end"] });
    return allGames;
  }

  // public async find(id: string): Promise<GameModel> {
  //     return await this.findOneById(id);
  // }

  public bar(str: string): string {
    return "hello, world!" + " " + str;
  }


} 



// @TODO make this method on CustomRepository interface and extend
export function getGameRepository() {
  const conn = getConnection();
  const gameRepository = conn.getCustomRepository(GameRepository);
  return gameRepository;
}

