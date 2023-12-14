import { User } from '../../domain/user';

export type GetLikesResponse = {
  created_at: string;
  user: User;
}[];
