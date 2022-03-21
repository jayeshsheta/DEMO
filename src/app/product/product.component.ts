import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AddToCart, RemoveFromCart } from '../store/actions';

export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
  maxAllowToPurchase: number,
  ItemLeft: number
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  cart: Product[] = [];

  constructor(private store: Store<{ items: []; cart: [] }>) {
    store.pipe(select('shop')).subscribe(data => {
      this.cart = data.cart
    }
    );
  }

  inCart = false;
  @Input() product: Product;

  addToCart(item: Product) {
    let allowed = this.allowItemToAdd(item)
    if (!allowed) { alert("not allowed"); return }
    this.store.dispatch(new AddToCart(item));
    this.inCart = true;
  }
  allowItemToAdd(item: Product) {
    let totProductsInCart = this.cart.filter(i => i.name == item.name).length || 0;
    return  item.maxAllowToPurchase > totProductsInCart

  }
  removeFromCart(item: Product) {
    this.store.dispatch(new RemoveFromCart(item));
    this.inCart = false;
  }
  ngOnInit() { }
}
