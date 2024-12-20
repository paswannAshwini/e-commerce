import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;
  isLoggedIn : boolean = false


  constructor( private router: Router){

  }
  ngOnInit(): void {

    this.isLoggedIn = localStorage.getItem('authToken') !== null;
    
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
