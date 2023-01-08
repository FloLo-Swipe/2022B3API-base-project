import { IsNotEmpty, IsEmail, IsIn, IsOptional, MinLength } from "class-validator";
import { Column } from "typeorm";

export class ProjectInfo {

  @Column()
  name!: string;
  @Column('uuid')
  referringEmployeeId!: string; //au format uuidv4
}
