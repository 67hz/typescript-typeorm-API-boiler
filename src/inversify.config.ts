/**
 * Bring all the things in here for bindings: types, services, repositories,
 * controllers
 */
import { AsyncContainerModule} from "inversify";
import {
  Repository,
  createConnection,
  getConnection,
  getCustomRepository
} from "typeorm";
// import { getRepository } from "./repositories/GameRepository";
import { Game } from "./entities/Game";
import { TYPES } from "./constants/types";
import { GameService } from "./services/GameService"
import { GameController } from "./controllers/GameController";
import { GameRepository, getGameRepository } from "./repositories/GameRepository";





export const bindings = new AsyncContainerModule(async (bind) => {

  // loads all entities from `src/entities/*.ts` //
  const conn = await createConnection();
  // await require("./controllers/GameController");
  

  bind<GameController>(TYPES.GameController).to(GameController);
  bind<GameService>(TYPES.GameService).to(GameService);
  // bind<GameRepository>(TYPES.GameRepository).to(GameRepository);

  bind<Repository<Game>>(TYPES.GameRepository).toDynamicValue(() => {
      // const conn = getConnection();
      // return conn.getCustomRepository(Game);
    return getGameRepository();

  }).inRequestScope();

});
