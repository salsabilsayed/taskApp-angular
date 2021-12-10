import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {Task} from '../../interfaces/taskModel';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService:TaskService) { }

  allTasks:any;

  getAllTasks(){
    this.taskService.getAllTasks().subscribe(
      {
        next:(res)=>{
          this.allTasks = res
        }
      }
    )
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task._id).subscribe(
      {
        next:(res)=>{
          let index= this.allTasks.indexOf(task)
          this.allTasks.splice(index,1)
        }
      }
    )
  }

  ngOnInit(): void {
    this.getAllTasks()
  }

}
