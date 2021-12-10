import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Task } from 'src/app/interfaces/taskModel';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  constructor(private taskService:TaskService,private route:ActivatedRoute,private router:Router) { }

  id:any = this.route.snapshot.params['id']
  task:Task = {}

  getSingleTask(id:any){
    this.taskService.getSingleTask(id).subscribe({
      next:(res:any)=>{
        this.task = res;
      }
    })
  }

  updateTask(value:any){
    console.log(value);
    this.taskService.updateTask(this.id,value).subscribe({
      next:(res)=>{
        this.router.navigate(['/tasks'])
      }
    })
  }

  ngOnInit(): void {
    this.getSingleTask(this.id)
  }

}
