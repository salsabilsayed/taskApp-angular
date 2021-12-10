import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  file:any;

  handleUpload(event:any){
    this.file = event.target.files
  }

  uploadFile(){
    const myData = new FormData();
    if(this.file){
      for(let i=0; i < this.file.length ; i++){
        myData.append('avatar',this.file[i])
      }
    }
    
    this.userService.addImage(myData).subscribe(()=>{})
  }

  user:User ={};
  invalidEmail:boolean = false;

  getProfile(){
    this.userService.getProfile().subscribe({
      next:res =>{
        this.user = res;
      }
    })
  }

  updateUser(data:any){
    this.userService.updateUser(data).subscribe({
      next:(res:User)=>{
        this.uploadFile()
        this.user=res
        this.router.navigate(['/'])
      },
      error:(httpError)=>{
        if(httpError.error.code === 11000){
          this.invalidEmail = true
        }
      }
    })
  }

  ngOnInit(): void {
    this.getProfile()
  }

}
