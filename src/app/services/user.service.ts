import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url:string = 'https://task-app-nodee.herokuapp.com/';

  getProfile(){
    return this.http.get<User>(this.url+'profile')
  }

  updateUser(user:any){
    return this.http.patch(this.url+'profile',user)
  }

  addImage(image:any){
    return this.http.post(this.url+'profileImage',image)
  }

  deleteImage(){
    return this.http.delete(this.url+'profileImage')
  }
}
