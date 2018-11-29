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
import { Equal } from "typeorm";




// @injectable()
@EntityRepository(Game)
export class GameRepository extends Repository<Game>{

  public async findGame(): Promise<Array<Game>> {
    const allGames = await this.find({ select: ["id", "start", "end", "arrive"] });
    return allGames;
  }

  public async findById(gameId: string): Promise<Array<Game>> {
    // const game = await this.find({ where: { id: gameId }}); // alte
    const game = await this.find({ id: Equal(gameId) });
    return game;
  }

  public test(str: string): string {
    return "hello, world!" + " " + str;
  }


} 



// @TODO make this method on CustomRepository interface and extend
export function getGameRepository() {
  const conn = getConnection();
  const gameRepository = conn.getCustomRepository(GameRepository);
  return gameRepository;
}

