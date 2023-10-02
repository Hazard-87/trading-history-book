import { RegistrationData } from './auth'

export interface GetUserData extends IGet {
  data: IUser
}

export interface IUser extends RegistrationData {
  id: number
  email: string
  firstName: string
  lastName: string
  password: null
}