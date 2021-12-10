import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  invalidEmail:boolean = false;
  invalidAge:boolean = false;
  users:any
  token:any

  signUp(data:any){
    this.authService.signUp(data).subscribe({
      next:(res)=>{
        this.users = res
        this.token = this.users.token
        localStorage.setItem('token',this.token)
        this.router.navigate(['/']);
      },
      error:(httpError)=>{
        if(httpError.error.code === 11000){
          this.invalidEmail = true
        }
        if(httpError.error.errors.age.name === 'ValidatorError'){
          this.invalidAge = true
        }
      }
    })
  }

  removeEmailMsg(){
    this.invalidEmail = false;
  }

  removeAgeMsg(){
    this.invalidAge = false;
  }

  ngOnInit(): void {
  }

}
