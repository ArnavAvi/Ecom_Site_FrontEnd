import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  private url = 'http://localhost:1234';

  constructor(private http: HttpClient) { }

  addToCart(id: any) {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/cart/addToCart/' + id, {headers});
  }

  showMyCart() {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/cart/showCart', {headers});
  }

  removeOne(id: number) {
    console.log('show my cart serviced');
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/cart/removeOneFromCart/' + id, {headers});
  }

  removeWholeProduct(id) {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/cart/removeFromCart/' + id, {headers});
  }

  showOrderHistory() {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/cart/checkout', {headers});

  }
}
