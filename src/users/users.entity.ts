import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id!: string; //au format uuidv4
  @Column({unique: true})
  public username!: string; // cette propriété doit porter une contrainte d'unicité
  @Column({unique: true})
  public email!: string; // cette propriété doit porter une contrainte d'unicité
  @Column()
  public password!: string;
  @Column({default: 'Employee'})
  public role!: 'Employee' | 'Admin' | 'ProjectManager' // valeur par defaut : 'Employee'
}
