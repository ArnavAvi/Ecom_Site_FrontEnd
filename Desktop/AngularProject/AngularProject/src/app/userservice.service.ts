import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

export interface User {
  username: string;
  email: string;
  password: string;
 }
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  username: string;
  private url = 'http://localhost:1234/api';
  // @ts-ignore
  constructor(private http: HttpClient, private router: Router) { }
/*  public addUsers(user) {
    // @ts-ignore
    return this.http.post<Users>(this.url + '/addusers', user);
  }*/

  addUsers(user: User) {
    console.log('addUser clicked!!');
    return this.http.post<User>(this.url + '/adduser', user);
  }

  getUser() {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get<User>(this.url + '/findUser', {headers});
  }

  editUser(user: User) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.post<User>(this.url + '/editUser' , user, {headers});
  }
}
