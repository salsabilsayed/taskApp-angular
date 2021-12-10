import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UserService) { }

  user:User = {}
  
  isImageUploaded:boolean = false;

  getProfile(){
    this.userService.getProfile().subscribe({
      next:(res:any)=>{
        this.user = res
        if(this.user.avatar){
          this.isImageUploaded = true;
        }
      }
    })
  }

  deleteImage(){
    this.userService.deleteImage().subscribe({
      next:(res=>{
        this.isImageUploaded = false;
      })
    })
  }

  ngOnInit(): void {
    this.getProfile()
  }

}
