import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
export class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  email: string;

  @UpdateDateColumn()
  created_ad: Date;

  @CreateDateColumn()
  updated_ad: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
