import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  user:any
  token:any
  invalidLogin:boolean = false;

  login(data:any){
    this.authService.login(data).subscribe({
      next:(res)=>{
        this.user = res
        this.token = this.user.token
        localStorage.setItem('token',this.token);
        this.router.navigate(['/']);
      },
      error:(httpError)=>{
        if(httpError){
          this.invalidLogin = true
        }
      }
    })
  }

  removeErrorMsg(){
    this.invalidLogin = false
  }
  ngOnInit(): void {
  }

}
