import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit{

  phoneTitle: string | null = '';
  phoneImage: string | null = '';
  Phoneprice: string | null = '';


  constructor(private route: ActivatedRoute, private cartService: CartService,private router: Router,) {}

  ngOnInit(): void {
    // Get the title from the path parameters
    this.route.params.subscribe(params => {
      this.phoneTitle = params['title']; // This will be the phone title from the URL path
      
    });

    // Get the image from the query parameters
    this.route.queryParams.subscribe(queryParams => {
      this.phoneImage = queryParams['image']; // This will be the phone image URL from the query params
      this.Phoneprice = queryParams['price'];
    });
  }

  addToCart() {
    this.cartService.setCartData(this.phoneImage, this.phoneTitle,  this.Phoneprice);
    // Navigate to CartListingComponent
    this.router.navigate(['/pages/cart-listing']);
  }
  
  goBackToDashboard(){
    this.router.navigate(['/pages/dashboard'])

  }

}
