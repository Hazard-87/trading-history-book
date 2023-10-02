import { IGet } from './rest'

export interface AuthData {
  email: string
  password: string
}

export interface RegistrationData extends AuthData{
  firstName: string
  lastName: string
}

export interface GetAuthData extends IGet {
  data: {
    access_token: string
  }
}

export interface IProfile extends RegistrationData{
  id: number
  password: null
}

export interface GetProfileData extends IGet {
  data: IProfile
}
