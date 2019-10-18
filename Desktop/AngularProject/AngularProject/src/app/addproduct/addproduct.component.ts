import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User, UserserviceService} from '../userservice.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private http: UserserviceService) {
  }

  ngOnInit() {
    /*    this.addUsers(this.user);*/
  }
}
