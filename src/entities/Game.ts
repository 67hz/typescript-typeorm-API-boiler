import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game {

  @PrimaryGeneratedColumn()
  id: number; // assumed to be UUID

  @Column()
  start: number;

  @Column()
  end: number;

  @Column()
  arrive: number;
}
