import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { Observable } from 'rxjs';
import { IToken } from '../interfaces/IToken';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private route: Router) { }
  url = "http://localhost:8000/api";

  add(user: IUser) {
    return this.httpClient.post<IUser>(this.url + '/users', user);
  }

  login(credentials:any): Observable<IToken>{
    return this.httpClient.post<IToken>(this.url + '/login_check', credentials);
  }

  saveToken(token: string){
    localStorage.setItem('token', token);
      this.route.navigate(['/']);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLogged(): boolean {
    const token = localStorage.getItem('token');
    return !! token;
  }

  logout() {
    localStorage.removeItem('token');
  }

}
