/**
 * Bring all the things in here for bindings: types, services, repositories,
 * controllers
 */
import { Container } from "inversify";
import { TYPE } from "./constants/types";
import { GameRepository } from "./repositories/GameRepository"
import { GameService } from "./services/GameService"
import { GameController } from "./controllers/GameController";







const container = new Container();

container.bind<RegistrableController>(TYPES.Controller).to(AddressController);
container.bind<AddressService>(TYPES.AddressService).to(AddressServiceImpl);
container.bind<AddressRepository>(TYPES.AddressRepository).to(AddressRepositoryImplMongo);
container.bind<AddressRepository>(TYPES.AddressRepository2).to(AddressRepositoryImplDb);



// export const bindings = new AsyncContainerModule(async (bind) => {
//
//     // await some db connection 
//     //
//     await require("./controllers/GameController");
//
//     bind<Repository<GameRepository>>(TYPE.GameRepository).toDynamicValue(() => {
//         return getRepository();
//     }).inRequestScope();
//
// });

export default container;
