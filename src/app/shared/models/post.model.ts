import { BaseEntity } from './base';

export class Post extends BaseEntity {
  user_id: number;
  title: string;
  content: string;
  image: string;
}
