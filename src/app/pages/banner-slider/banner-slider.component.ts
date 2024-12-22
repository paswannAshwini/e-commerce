import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.css']
})
export class BannerSliderComponent {

  currentIndex = 0;
  slides = [
    {
      title: 'Welcome to Our Store',
      image: 'https://via.placeholder.com/600x200?text=Slide+1',
      buttonText: 'Shop Now'
    },
    {
      title: 'Special Offer',
      image: 'https://via.placeholder.com/600x200?text=Slide+2',
      buttonText: 'Check Offers'
    },
    {
      title: 'Latest Trends',
      image: 'https://via.placeholder.com/600x200?text=Slide+3',
      buttonText: 'Discover More'
    }
  ];
}
