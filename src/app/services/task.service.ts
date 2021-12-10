import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  url:string = 'https://task-app-nodee.herokuapp.com/'

  addTask(data:any){
    return this.http.post(this.url+'tasks',data)
  }

  getAllTasks(){
    return this.http.get<Task>(this.url+'tasks')
  }

  deleteTask(id:any){
    return this.http.delete(this.url+'tasks/'+id)
  }

  getSingleTask(id:any){
    return this.http.get<Task>(this.url+'tasks/'+id)
  }

  updateTask(id:any,task:Task){
    return this.http.patch(this.url+'tasks/'+id,task)
  }
}
