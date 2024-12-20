import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = [
    { title: 'Users', count: 1234, icon: '👥', bgColor: '#FF6B6B' },
    { title: 'Sales', count: 5678, icon: '💰', bgColor: '#4ECDC4' },
    { title: 'Visitors', count: 2345, icon: '🌎', bgColor: '#FFD93D' },
    { title: 'Orders', count: 9101, icon: '📦', bgColor: '#A29BFE' },
  ];

  
}
