import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-cart-listing',
  templateUrl: './cart-listing.component.html',
  styleUrls: ['./cart-listing.component.css']
})
export class CartListingComponent implements OnInit {
  isLoggedIn : boolean = false;

  cartItems: Array<{ title: string, image: string, price: number, quantity: number }> = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {

    this.isLoggedIn = localStorage.getItem('authToken') !== null;

    const cartData = this.cartService.getCartData();
    console.log(cartData)
    if (cartData) {
      this.cartItems.push({
        image: cartData.image,  // Ensure the image goes to the right field
        title: cartData.title,  // Ensure the title goes to the right field
        price: cartData.price,  // Ensure price is parsed as a number
        quantity: 1
      });
      console.log(this.cartItems);
    }
        // Notify the shared service about the initial cart quantity
        this.cartService.updateCartQuantity(this.getTotalCartQuantity());
  }

  // Method to increase quantity
  increaseQuantity(index: number): void {
    this.cartItems[index].quantity += 1;
    this.cartService.updateCartQuantity(this.getTotalCartQuantity());
  }

  // Method to decrease quantity
  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity -= 1;
      this.cartService.updateCartQuantity(this.getTotalCartQuantity());
    }
  }

  // Method to calculate the total price for an item
  getTotalPrice(item: { price: number, quantity: number }): number {
    return item.price * item.quantity;
  }

  // Method to calculate the total cart price
  getTotalCartPrice(): number {
    return this.cartItems.reduce((total, item) => total + this.getTotalPrice(item), 0);
  }

    // Calculate the total quantity of items in the cart
    getTotalCartQuantity(): number {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    }


    checkoutListing(){
      if(this.isLoggedIn){
        this.router.navigate(['/pages/listing'])
      }else{
        this.router.navigate(['/auth/login'])
      }
    }

    goBackToDashboard(){
      this.router.navigate(['/pages/dashboard'])
  
    }
}
