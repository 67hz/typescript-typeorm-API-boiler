import { Container } from "inversify";
import { AsyncContainerModule } from "inversify";
import { TYPE } from "./constants/types";
// import { Game, ScoringEvent, ScorekeepingData } from "./models/Scoring";
import { GameRepository } from "./repositories/GameRepository"

const myContainer = new Container();


import { Repository } from "typeorm";
import { Game } from "./entities/Game";
// import { getDbConnection } from "./db";
// import { getRepository } from "./repositories/GameRepository";

export const bindings = new AsyncContainerModule(async (bind) => {

    // await some db connection 
    //
    await require("./controllers/GameController");

    bind<Repository<GameRepository>>(TYPE.GameRepository).toDynamicValue(() => {
        return getRepository();
    }).inRequestScope();

});
