import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm'


@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  public id!: string; //au format uuidv4
  @Column()
  name!: string;
  @Column('uuid')
  referringEmployeeId!: string; //au format uuidv4
}
