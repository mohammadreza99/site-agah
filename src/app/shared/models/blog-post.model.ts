import { BaseEntity } from './base';

export class BlogPost extends BaseEntity {
  user_id: number;
  title: string;
  content: string;
  image: string;
}
