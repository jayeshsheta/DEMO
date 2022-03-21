import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { catchError } from 'rxjs/operators';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalPurchaseVal=0
  constructor(private store: Store<{ items: []; cart: [] }>) {
    store.pipe(select('shop')).subscribe(data => {
     this.cart = data.cart
     this. totalPurchaseVal = this.cart.reduce((accum, item) => accum + item.price, 0)
    }
    );
  }
  cart: Product[] = [];
  ngOnInit() {
    console.log(this.cart)

  }
}
