import { User } from './user.types'
import { ResponseApi } from './utlis.types'

export type AuthResponse = ResponseApi<{
  access_token: string
  expires: string
  refresh_token: string
  expires_refresh_token: string
  user: User
}>
