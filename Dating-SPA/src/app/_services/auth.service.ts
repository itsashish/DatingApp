import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   baseUrl = environment.apiUrl + 'auth/';
   jwtHelper = new JwtHelperService();
   decodedToken: any;
   currentUser: User;

constructor(private http: HttpClient) { }

loggedin(){
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}

getUserName()
{
  return this.jwtHelper.decodeToken(localStorage.getItem('token')).unique_name;
}

login(model: any){
  return this.http.post(this.baseUrl + 'login', model)
    .pipe(
      map((response: any) => {
      const user = response;
      if (user)
      {
        localStorage.setItem('token', user.token);
      }
    })
  );
}

register(model: any){
return this.http.post(this.baseUrl + 'register', model);
}

}
