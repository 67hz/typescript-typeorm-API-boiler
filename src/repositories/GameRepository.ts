import {injectable} from "inversify";
import { createConnection, Connection } from "typeorm";

export class GameRepository {
  constructor() {
    this.connect().then(async connection => {
    }).catch(err => console.log("Error connecting to database: ", err));
  }
  // const connection: Connection = await createConnection();

  private connect(): Promise<Connection> {
    return createConnection();
  }

}
