import { Injectable } from '@angular/core';
import { Product } from '../../pages/models/products.models';

@Injectable({
  providedIn: 'root'
})
  export class CartService {
    total = 0;
    itemsInCart: Product[] = [];
    constructor() {}
  
    totalPrice(): number {
      //clear total
      this.total = 0;
      this.itemsInCart.forEach((item) => {
        this.total += item.price * item.quantity;
      });
      return this.total;
    }
  
    removeItems(item: Product) {
      const index = this.itemsInCart.findIndex((item) => item.id === item.id);
      if (index != -1) {
        this.itemsInCart.splice(index, 1);
      }
    }
  
    addItems(i: number) {
      this.itemsInCart[i].quantity++;
      this.totalPrice();
    }
    //get item in cart
    allItemInCart() {
      return this.itemsInCart;
    }
  
    removeQuantity(i: number) {
      if (this.itemsInCart[i].quantity > 1) {
        this.itemsInCart[i].quantity--;
      }
      this.totalPrice();
    }
  
    addToCart(newItem: Product) {
      let index = this.itemsInCart.findIndex((item) => item.id === newItem.id);
      if (index != -1) {
        this.itemsInCart[index].quantity++;
        return;
      }
      newItem.quantity = 1;
      this.itemsInCart.push(newItem);
      console.log(this.itemsInCart);
      this.totalPrice();
    }
}
