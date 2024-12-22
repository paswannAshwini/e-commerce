import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;
  isLoggedIn : boolean = false;
  isHamburgerOpen = false;

  totalCartQuantity: number = 0;


  constructor( private router: Router,private cartService: CartService){

  }
  ngOnInit(): void {

    this.isLoggedIn = localStorage.getItem('authToken') !== null;
    this.cartService.cartQuantity$.subscribe(quantity => {
      this.totalCartQuantity = quantity;
    });
    
  }
  cartQuantity(){
    this.router.navigate(['/pages/cart-listing']);

  }

  toggleHamburger() {
    this.isHamburgerOpen = !this.isHamburgerOpen;
  }
    // Method to toggle the mobile menu visibility
    toggleMenu(): void {
      this.isMenuOpen = !this.isMenuOpen;
    }


    logout(){
      localStorage.removeItem('authToken'); // Remove the token
      this.isLoggedIn = false;
      this.router.navigate(['/pages/dashboard']); // Redirect to login page
    }
}
