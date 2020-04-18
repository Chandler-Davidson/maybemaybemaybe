import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  title!: string;

  @Column()
  subreddit!: string;

  @Column()
  upvotes!: number;

  @Column({ unique: true })
  redditId!: string;

  @Column()
  author!: string;

  @Column()
  url!: string;

  @Column()
  createdUtc!: string;

  @Column()
  isVideo!: boolean;
}