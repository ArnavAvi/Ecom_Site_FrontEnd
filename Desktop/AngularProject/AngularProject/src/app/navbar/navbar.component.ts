import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authing: AuthenticationService) { }

  ngOnInit() {
  }

  logItOut() {
    this.authing.logOut();
  }

  custom() {
    return !(this.authing.isUserLoggedIn());
  }
}
