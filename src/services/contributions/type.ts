import { User } from '@/models/user'

export type GetLikesResponse = {
  created_at: string
  user: User
}[]
