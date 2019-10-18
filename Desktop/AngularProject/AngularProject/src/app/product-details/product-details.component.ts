import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CartserviceService} from '../cartservice.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public userId;
  public userName;
  public image;
  public catagory;
  public detail;
  public price;

  constructor(private route: ActivatedRoute, private cart: CartserviceService,
              private auth: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    // tslint:disable-next-line:radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userId = id;
    const name = this.route.snapshot.paramMap.get('name');
    this.userName = name;
    const img = this.route.snapshot.paramMap.get('imageSrc');
    this.image = img;
    const cat = this.route.snapshot.paramMap.get('catagory');
    this.catagory = cat;
    const detail = this.route.snapshot.paramMap.get('detail');
    this.detail = detail;
    // tslint:disable-next-line:radix
    const price = parseInt(this.route.snapshot.paramMap.get('price'));
    this.price = price;
  }

  // @ts-ignore
  addThisToCart(id) {
    // tslint:disable-next-line:triple-equals
    console.log('from product-details addToCart() called !!');
    // tslint:disable-next-line:triple-equals
    if (this.auth.isUserLoggedIn() == false) {
      alert('You need to log in before adding to cart!');
      this.router.navigate(['/login']);
    } else {
      this.cart.addToCart(id).subscribe( data => {
      console.log(data);
      alert('Added to Cart');
    }); }

  }

}
