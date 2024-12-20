import { Component } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      phoneNumber: '123-456-7890'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@gmail.com',
      phoneNumber: '987-654-3210'
    },
    {
      id: 3,
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice.johnson@gmail.com',
      phoneNumber: '456-789-0123'
    },
    {
      id: 4,
      firstName: 'Bob',
      lastName: 'Williams',
      email: 'bob.williams@gmail.com',
      phoneNumber: '789-012-3456'
    },
    {
      id: 5,
      firstName: 'Ashwini',
      lastName: 'kumar',
      email: 'ashwini.kumar@gmail.com',
      phoneNumber: '9999999990'
    },
    {
      id: 6,
      firstName: 'preeti',
      lastName: 'kumari',
      email: 'preeti.kumari@gmail.com',
      phoneNumber: '9999999880'
    }
  ];


    // Method to edit a user
    editUser(userId: number): void {
      console.log('Edit user with ID:', userId);
      // Add logic for editing the user, e.g., navigate to an edit form
    }
  
    // Method to delete a user
    deleteUser(userId: number): void {
      console.log('Delete user with ID:', userId);
      // Remove the user from the array
      this.users = this.users.filter(user => user.id !== userId);
    }

}
