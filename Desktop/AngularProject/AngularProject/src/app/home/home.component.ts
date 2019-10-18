import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Router } from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {CartserviceService} from '../cartservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: string[];
  id: number;
  name: string;
  imageSrc: string;
  category: string;
  detail: string;
  price: number;

  constructor(private httpClientService: HttpClientService, private router: Router,
              private authing: AuthenticationService, private cart: CartserviceService) {
  }

  ngOnInit() {
    this.httpClientService.getAll().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.products = response;
  }

  getByCatagory(catagory) {
    this.httpClientService.getByCat(catagory).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  onSelect(s) {
    this.router.navigate(['/productdetails', s.id, s.name, s.imageSrc, s.category, s.detail, s.price]);
  }

  logItOut() {
    this.authing.logOut();
  }

  custom() {
    return !(this.authing.isUserLoggedIn());
  }
  addThisToCart(id) {
    // tslint:disable-next-line:triple-equals
    console.log('from product-details addToCart() called !!');
    // tslint:disable-next-line:triple-equals
    if (this.authing.isUserLoggedIn() == false) {
      alert('You need to log in before adding to cart!');
      this.router.navigate(['/home']);
    } else {
      this.cart.addToCart(id).subscribe(data => {
        console.log(data);
        alert('Added to Cart');
      });
    }
  }
}
