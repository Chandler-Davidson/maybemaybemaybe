import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, Unique, PrimaryColumn } from "typeorm";

@Entity()
export class Post extends BaseEntity {
  @PrimaryColumn()
  redditId!: string;

  @Column()
  title!: string;

  @Column()
  subreddit!: string;

  @Column()
  upvotes!: number;

  @Column()
  author!: string;

  @Column()
  url!: string;

  @Column()
  createdUtc!: string;

  @Column()
  isVideo!: boolean;

  @Column({ nullable: true })
  media!: string;
}
