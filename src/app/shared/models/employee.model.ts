import { BaseEntity } from './base';
import { SocialNetwork } from './social-network.model';

export class Employee extends BaseEntity {
  first_name: string;
  last_name: string;
  image: string;
  position_id: number;
  social_accounts: SocialNetwork[];
}
