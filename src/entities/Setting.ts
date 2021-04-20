import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('settings')
export class Setting {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

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
