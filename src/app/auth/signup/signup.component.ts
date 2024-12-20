import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup , Validators} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  emailRegex = /^([a-zA-Z0-9_\+\-\.]+)@([a-zA-Z0-9_\[\]\-\.]+)\.([a-zA-Z0-9_\[\]\-\.]+)$/; // Email Regex Pattern
  passwordRegex!: '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*:"]).{8,20}$'; // Password Regex Pattern
 

  constructor(private fb: FormBuilder , private router:Router){

  }
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password:['',[Validators.required, Validators.pattern(this.passwordRegex)]],
      confirmPassword: ['', Validators.required],
    })
  }
  


  onSubmit(){
    if (this.signupForm.valid) {
      const formValues = this.signupForm.value;
      console.log(formValues)

      localStorage.setItem('signupData' , JSON.stringify(formValues));
      alert('Signup data saved successfully!');
      this.signupForm.reset(); 
      this.router.navigate(['/auth/login'])    
    }
    else {
      alert('Please fill out the form correctly.');
    }
  

  }

}
