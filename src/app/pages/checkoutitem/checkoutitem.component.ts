import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkoutitem',
  templateUrl: './checkoutitem.component.html',
  styleUrls: ['./checkoutitem.component.css']
})
export class CheckoutitemComponent implements OnInit {
  paymentMethod: string = 'credit';
  checkOutForm!: FormGroup;
  formSubmitted: boolean = false;  // Flag to control form visibility
  savedData: any = null;    
  isEditMode = false;       // Holds the data from localStorage

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addressForm();

    // Check if data exists in localStorage and display it
    const savedFormData = localStorage.getItem('checkoutFormData');
    if (savedFormData) {
      this.savedData = JSON.parse(savedFormData);
      this.formSubmitted = true;  // Hide form if data already exists
    }
  }

  addressForm() {
    this.checkOutForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.checkOutForm.valid) {
      // Save the form data to localStorage
      const formData = this.checkOutForm.value;
      localStorage.setItem('checkoutFormData', JSON.stringify(formData));

      // Hide the form and show the saved data
      this.formSubmitted = true;
      this.savedData = formData;
      this.isEditMode = false; 

      
    } 
  }

  editData(){
    this.isEditMode = true;  // Enable edit mode
    this.formSubmitted = false;  // Show the form again
    this.checkOutForm.patchValue(this.savedData); 
  }

  resetdata(){
    localStorage.removeItem('checkoutFormData');
    this.checkOutForm.reset();
    this.savedData = null;
    this.formSubmitted = false;
    this.isEditMode = false;

  }

  goBackToDashboard() {
    this.router.navigate(['/pages/cart-listing']);
  }

  onPayment(){
    this.router.navigate(['/pages/payment-mode'])

  }
}
