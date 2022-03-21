import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor(private http: HttpClient) { }
  data = [
    {
      name: "Iphone",
      price: 10,
      description: "iphone 8gb RAM",
      image: "https://www.w3.org/Style/Examples/007/st-tropez.jpg",
      maxAllowToPurchase:3,
      ItemLeft:5
    },
    {
      name: "Pixel",
      price: 10,
      description: "Google Pixel",
      image: "https://www.w3.org/Style/Examples/007/st-tropez.jpg",
      maxAllowToPurchase:3,
      ItemLeft:2
    }, {
      name: "Samsung",
      price: 10,
      description: "Samsung phone 8GB RAM",
      image: "https://www.w3.org/Style/Examples/007/st-tropez.jpg",
      maxAllowToPurchase:3,
      ItemLeft:19
    }
  ];
  getAll(): Observable<any> {
    return of(this.data) 
}
}