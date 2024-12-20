import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup

  constructor( private router:Router, private fb: FormBuilder){}


  ngOnInit(): void {
    this.loginForm = this.fb.group({

      email: ['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }

  onSubmit(){

    if(this.loginForm.valid){
      const formValues = this.loginForm.value;

      const storedData = JSON.parse(localStorage.getItem('signupData') || '{}');

      if(storedData.email === formValues.email && storedData.password === formValues.password ){
        const authToken = 'dummyAuthToken';
        localStorage.setItem('authToken', authToken );
        this.router.navigate(['/pages/listing'])  
        this.loginForm.reset(); 
      }
      else {
        alert('Invalid email or password.');
      }
    }
  }

}
