import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gadget',
  templateUrl: './gadget.component.html',
  styleUrls: ['./gadget.component.css']
})
export class GadgetComponent implements OnInit{

  imagesToDisplay: any[] = [];
  role: any

  televisionImages = [
    {title: 'television1', price:'15000', image:'/assets/televisions/television1.webp'},
    {title: 'television2', price:'15000', image:'/assets/televisions/television2.webp'},
    {title: 'television3', price:'15000', image:'/assets/televisions/television3.webp'},
    {title: 'television4', price:'15000', image:'/assets/televisions/television4.webp'},
    {title: 'television5', price:'15000', image:'/assets/televisions/television5.webp'},
    {title: 'television6', price:'15000', image:'/assets/televisions/television6.webp'},
    {title: 'television7', price:'15000', image:'/assets/televisions/television7.webp'},
    {title: 'television8', price:'15000', image:'/assets/televisions/television8.webp'},
    {title: 'television9', price:'15000', image:'/assets/televisions/television9.webp'},
    {title: 'television10', price:'15000', image:'/assets/televisions/television10.webp'},
    {title: 'television11', price:'15000', image:'/assets/televisions/television11.webp'},
    {title: 'television12', price:'15000', image:'/assets/televisions/television12.webp'},

  ]


  phoneImages = [
    {title: 'Apple-iPhone-16-Pro-Max', price:'15000', image:'/assets/phones/Apple-iPhone-16-Pro-Max.webp'},
    {title: 'Google-Pixel-8a',price:'15000', image:'/assets/phones/Google-Pixel-8a.webp'},
    {title: 'Motorola-Edge-50-Fusion',price:'15000', image:'/assets/phones/Motorola-Edge-50-Fusion.webp'},
    {title: 'OnePlus-Nord-CE4-5G-Smartphone',price:'15000', image:'/assets/phones/OnePlus-Nord-CE4-5G-Smartphone.webp'},
    {title: 'POCO-C61',price:'15000', image:'/assets/phones/POCO-C61.webp'},
    {title: 'Realme-Narzo-70-Turbo-5G-Phone',price:'15000', image:'/assets/phones/Realme-Narzo-70-Turbo-5G-Phone.webp'},
    {title: 'Redmi-13c-5g',price:'15000', image:'/assets/phones/Redmi-13c-5g.webp'},
    {title: 'Samsung-Galaxy-A35-5G',price:'15000', image:'/assets/phones/Samsung-Galaxy-A35-5G.webp'},
    {title: 'Samsung-Galaxy-S24-FE-5G',price:'15000', image:'/assets/phones/Samsung-Galaxy-S24-FE-5G.webp'},
    {title: 'Samsung-M05-64-GB-Mint-Green',price:'15000', image:'/assets/phones/Samsung-M05-64-GB-Mint-Green.webp'},
    {title: 'Vivo-5G',price:'15000', image:'/assets/phones/Vivo-5G.webp'},
    {title: 'Vivo-V40-5G-Smartphone',price:'15000', image:'/assets/phones/Vivo-V40-5G-Smartphone.webp'},
    {title: 'Vivo-V40e-5G-Smartphone',price:'15000', image:'/assets/phones/Vivo-V40e-5G-Smartphone.webp'},
    {title: 'Vivo-Y18T-128GB-Gem-Green',price:'15000', image:'/assets/phones/Vivo-Y18T-128GB-Gem-Green.webp'},
    {title: 'Apple-iPhone-16-Pro-Max',price:'15000', image:'/assets/phones/Apple-iPhone-16-Pro-Max.webp'},
    {title: 'Apple-iPhone-16-Pro-Max',price:'15000', image:'/assets/phones/Apple-iPhone-16-Pro-Max.webp'},
    {title: 'Apple-iPhone-16-Pro-Max',price:'15000', image:'/assets/phones/Apple-iPhone-16-Pro-Max.webp'},

  ]


  laptopImages = [
    {title: 'laptop1', price:'15000', image:'/assets/laptops/laptop1.webp'},
    {title: 'laptop2', price:'15000', image:'/assets/laptops/laptop2.webp'},
    {title: 'laptop3', price:'15000', image:'/assets/laptops/laptop3.webp'},
    {title: 'laptop4', price:'15000', image:'/assets/laptops/laptop4.webp'},
    {title: 'laptop5', price:'15000', image:'/assets/laptops/laptop5.webp'},
    {title: 'laptop6', price:'15000', image:'/assets/laptops/laptop6.webp'},
    {title: 'laptop7', price:'15000', image:'/assets/laptops/laptop7.webp'},
    {title: 'laptop8', price:'15000', image:'/assets/laptops/laptop8.webp'},
    {title: 'laptop9', price:'15000', image:'/assets/laptops/laptop9.webp'},
    {title: 'laptop10', price:'15000', image:'/assets/laptops/laptop10.webp'},
    {title: 'laptop11', price:'15000', image:'/assets/laptops/laptop11.webp'},
    {title: 'laptop12', price:'15000', image:'/assets/laptops/laptop12.webp'},

  ]


  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.role = params.get('role')
      console.log(this.role);
    })
    
  }

  
  updateImages(): void {
    if (this.role === 'phone') {
      this.imagesToDisplay = this.phoneImages;
    } else if (this.role === 'laptop') {
      this.imagesToDisplay = this.laptopImages;
    } else if (this.role === 'television') {
      this.imagesToDisplay = this.televisionImages;
    }
  }

}
