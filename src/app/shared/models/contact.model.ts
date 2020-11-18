import { BaseEntity } from './base';

export class ContactUsInfo {
  address: string;
  email: string;
  phone: string;
  latitude: number;
  longitude: number;
}

export class CommentItem extends BaseEntity {
  name: string;
  email: string;
  comment: string;
  user?: any;
  replies?: CommentItem[];
  commentable_id?: string;
  commentable_type?: 'post' | 'course' | 'workshop' | 'comment';
  comment_replay_id?: string;
}

export class ContactComment {
  name: string;
  email: string;
  comment: string;
  key: string;
  value: string;
}

export class SocialNetwork extends BaseEntity {
  key: string;
  value: string;
}
