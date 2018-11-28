import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn, Generated } from "typeorm";

@Entity()
export class Game {

  @PrimaryGeneratedColumn()
  @Generated("uuid")
  id: string; // assumed to be UUID

  /**
   * should use @UpdateDateColumn to auto set 
   * if above, may need to add endpoint to adjust all date fields
   * e.g. game/:id/start game/:id/stop game/:id/arrive
   */
  @Column()
  start: number;

  @Column()
  end: number;

  @Column()
  arrive: number;
}
