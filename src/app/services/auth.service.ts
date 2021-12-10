import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = 'https://task-app-nodee.herokuapp.com/'
  constructor(private http:HttpClient) { }

  signUp(data:any){
    return this.http.post(this.url+'users',data)
  }

  login(data:any){
    return this.http.post(this.url+'users/login',data)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logout(){
    return this.http.delete(this.url+'logout')
  }
}
