import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/interfaces/taskModel';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskService:TaskService,private router:Router) { }

  task:Task = {};

  addTask(value:any){
    console.log(value);
    this.taskService.addTask(value).subscribe(
      {
        next:(res)=>{
          this.task = res
          this.router.navigate(['/tasks'])
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
