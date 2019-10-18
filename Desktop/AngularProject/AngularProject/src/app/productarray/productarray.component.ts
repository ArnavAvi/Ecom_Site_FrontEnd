import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-productarray',
  templateUrl: './productarray.component.html',
  styleUrls: ['./productarray.component.scss'],
})
export class ProductarrayComponent implements OnInit {
  public colors = [[ 'red' , 14.45],
  ['yellow' , 45.45]

];



 public product = [
   {
     color: 'Laptops',
     imgurl: './assets/Images/Necklace.jpg"',
     price: '14.00'
   },
   {
    color: 'Smart Phone',
    imgurl: './assets/Images/img-2.jpg',
    price: '8.00'
   },
   {
    color: 'Head Phones',
    imgurl: './assets/Images/img-3.jpg',
    price: '18.00'
   },
   {
    color: 'Keyboards',
    imgurl: './assets/Images/img-4.jpg',
    price: '18.99'
   },
   {
     color: 'Necklace',
     imgurl: '../../assets/Images/Necklace.jpg',
     price: '18.99'
   },
   {
     color: 'Pipe Wrench',
     imgurl: '../../assets/Images/wrench.jpg',
     price: '18.99'
   }
 ];
  constructor() { }

  ngOnInit() {
  }

}
