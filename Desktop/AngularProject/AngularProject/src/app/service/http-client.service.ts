import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Products {
  constructor(
    public price: number

) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }
  /*getPrice() {
    return this.httpClient.get<Products[]>('http://localhost:1234/show/all');
  }*/
  getAll() {
    return this.httpClient.get<Products[]>('http://localhost:1234/show/all');
  }
  getId() {
    return this.httpClient.get<Products[]>('http://localhost:1234/show/product' );
  }
  getByCat(catagory)  {
    console.log('getByCategory()');
    return this.httpClient.get<Products[]>('http://localhost:1234/show/category/' + catagory);
  }
}
