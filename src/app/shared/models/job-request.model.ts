import { BaseEntity } from './base';

export class JobRequest extends BaseEntity {
  job_id: number;
  first_name: string;
  last_name: string;
  birthday: Date;
  gender: string;
  email: string;
  phone: string;
  address: string;
  resume: string;
}
