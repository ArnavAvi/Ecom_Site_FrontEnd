import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {User, UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public username;
  public email;
  public password;
  constructor(private route: ActivatedRoute, private router: Router, private http: UserserviceService) { }
  // tslint:disable-next-line:new-parens
  private user: User = new class implements User {
// tslint:disable-next-line:no-unused-expression
    username;
    password;
    email;

    /*constructor() {console.log('this a const. call inside user class and uname:' + this.username + '\n'); }*/
  };
  ngOnInit() {
/*    this.addUsers(this.user);*/
  }


  addUsers(user) {
    this.http.addUsers(user).subscribe( data => {
      alert('User has been created!');
      this.router.navigate(['login']);
    });
  }

  func() {
    console.log(this.user.username + '/' + this.user.password + '/' + this.user.email );
  }
}
