import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { UserAPI } from "fw/users/user.api";

@Injectable()
export class UserService implements UserAPI {

  isAuthenticated = false;
  username: string;

  constructor(private router: Router) { }

  signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
    this.isAuthenticated = true;
    this.username = username;
    return Observable.of({});
  }

  signOut(): Observable<any> {
    this.isAuthenticated = false;
    this.router.navigate(['/signin']);
    return Observable.of({});
  }

  getUserInfo(): Observable<any> {
    return Observable.of(this.username);
  }

  register(username: string, password: string, email: string): Observable<any> {
    this.isAuthenticated = true;
    this.username = username;
    return Observable.of({});
  }
}
