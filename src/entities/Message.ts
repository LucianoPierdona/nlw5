import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from './User';

@Entity('messages')
export class Message {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  admin_id: string;

  @ManyToOne((_type) => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @Column('uuid')
  user_id: string;

  @Column()
  text: string;

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
