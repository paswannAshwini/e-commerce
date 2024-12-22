import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  roles = ['phone', 'television', 'laptop'];

 selectedRole = 'phone';  // Default is 'phone'

 constructor(private router: Router){

 }

  ngOnInit(): void {

  }

  cards = [
    { title: 'Users', count: 1234, icon: '👥', bgColor: '#FF6B6B' },
    { title: 'Sales', count: 5678, icon: '💰', bgColor: '#4ECDC4' },
    { title: 'Visitors', count: 2345, icon: '🌎', bgColor: '#FFD93D' },
    { title: 'Orders', count: 9101, icon: '📦', bgColor: '#A29BFE' },
  ];

  roleImages: { [key: string]: string } = {
    phone: '/assets/dashboardImg/Apple-iPhone-16-Pro-Max.webp',
    television: '/assets/dashboardImg/television.webp',
    laptop: '/assets/dashboardImg/laptop.webp'
  };

  // Variable to hold the selected image based on role
  selectedImage = this.roleImages['phone']; // Set default image to phone


  openGadgetComponent(role: any): void {
    this.router.navigate(['/pages/gadgets', role]);
  }

}
