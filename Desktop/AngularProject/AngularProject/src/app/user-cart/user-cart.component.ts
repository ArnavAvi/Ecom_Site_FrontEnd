import { Component, OnInit } from '@angular/core';
import {CartserviceService} from '../cartservice.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  constructor(private cart: CartserviceService, private router: Router) { }

  private prod;
  private total = 0;
  ngOnInit() {
    this.cart.showMyCart().subscribe(data => {
      this.prod = data;
      console.log(this.prod.length);
      let total = 0;
      // tslint:disable-next-line:prefer-for-of
      for ( let i = 0; i < this.prod.length; i++) {
        total = total + this.prod[i].product.price * this.prod[i].quantity;
      }
      this.total = total;
    });
  }

  removeOne(id: any) {
    console.log('id:- ' + id);
    this.cart.removeOne(id).subscribe( data1 => {
      this.cart.showMyCart().subscribe(data => {
        this.prod = data;
        let total = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.prod.length; i++) {
          total = total + this.prod[i].product.price * this.prod[i].quantity;
        }
        this.total = total;
        console.log('id:- ' + id);
      });
    });
  }
  addOne(id: any) {
    console.log(id);
    this.cart.addToCart(id).subscribe(data1 => {
      this.cart.showMyCart().subscribe(data => {
        this.prod = data;
        let total = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.prod.length; i++) {
          total = total + this.prod[i].product.price * this.prod[i].quantity;
        }
        this.total = total;
      });
    });
  }
  removeProduct(id: any) {
    this.cart.removeWholeProduct(id).subscribe(data1 => {
      this.cart.showMyCart().subscribe(data => {
        this.prod = data;
        let total = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.prod.length; i++) {
          total = total + this.prod[i].product.price * this.prod[i].quantity;
        }
        this.total = total;
      });
    });
  }

  cartTOProd(productId: any) {
    this.router.navigate([]);
  }
}
