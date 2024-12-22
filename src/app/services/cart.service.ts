import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;

  private cartData: { image: any, title: any, price: any } | null = null;

    // BehaviorSubject to track the cart quantity, initialized with 0
    private cartQuantitySubject = new BehaviorSubject<number>(0);
    cartQuantity$ = this.cartQuantitySubject.asObservable();

  constructor() { }

  setCartData(image: any, title: any, price: any){
    this.cartData = { image, title, price };

  }

  // Method to get cart data
  getCartData(): { image: any, title: any, price: any } | null {
    return this.cartData;
  }


    // Method to update the cart quantity
    updateCartQuantity(quantity: number): void {
      this.cartQuantitySubject.next(quantity);
    }
  
}
