import {injectable} from "inversify";
import { getConnection } from "typeorm";
import { Game } from "../entities/Game";

export function getRepository() {
  const conn = getConnection();
  return conn.getRepository(Game);
}
