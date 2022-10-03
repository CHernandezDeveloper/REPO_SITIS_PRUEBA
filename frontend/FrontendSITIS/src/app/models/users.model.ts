import { IProfile } from "./profile.model";

export interface IUser{
  userName : string,
  email : string,
  password : string,
  profile : string | undefined
}
