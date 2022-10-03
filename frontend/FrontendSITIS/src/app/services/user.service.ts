
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { IUser } from '../models/users.model';
import { IProfile } from '../models/profile.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL_API : string = "http://localhost:8080/api/users";
  private URL_API_PROFILES : string = "http://localhost:8080/api/profiles";

  constructor(private http: HttpClient) { }

  createUser(user : IUser):Observable<IUser>{

    return this.http.post<IUser>(this.URL_API,user)
  }

  getProfiles():Observable<IProfile[]>{

    return this.http.get<IProfile[]>(this.URL_API_PROFILES);
  }

  getUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(this.URL_API);
  }
}
