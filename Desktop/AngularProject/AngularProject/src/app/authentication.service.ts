import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }
  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    console.log('authenticationService called! for ' + username + password + ' as ' + btoa(username + ':' + password));
    return this.http.get('http://localhost:1234/api/checkUser', {headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          const authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicAuth', authString);
          return userData;
        }
      )
    );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    console.log(!(user == null));
    return !(user == null);
  }

  logOut() {
    console.log('authentication.service.logOut() called!');
    // tslint:disable-next-line:triple-equals
    if (this.isUserLoggedIn() == true) {
      alert('Logging you out!');
      sessionStorage.removeItem('username');
    } else if (this.isUserLoggedIn() === false) {
      alert('No User Logged in');
    }
  }
}
