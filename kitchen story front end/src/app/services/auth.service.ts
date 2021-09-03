import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iadmincredentials } from '../interfaces/iadmincredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string = 'http://localhost:8080/api/';
  constructor(private http : HttpClient) { }

  /* authenticate(username :string, password :string) {
    if (username === "Durga" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  } */

  authenticate(adminCreds: Iadmincredentials) : Observable<Iadmincredentials>
  {
    return this.http.post(this.baseUrl + 'loginvalidate',adminCreds);
  }

  /* isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  } */

  updateCredentials(id : any , adminCreds : Iadmincredentials): Observable<Iadmincredentials>
  {
    return this.http.put(`${this.baseUrl}updatecredentials/${id}` , adminCreds);
    
  }
}
