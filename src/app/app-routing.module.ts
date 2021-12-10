import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AddTaskComponent } from './views/add-task/add-task.component';
import { LoginComponent } from './views/login/login.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { UpdateTaskComponent } from './views/update-task/update-task.component';
import { UpdateUserComponent } from './views/update-user/update-user.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'',component:ProfileComponent,canActivate:[AuthGuardService]},
  {path:'tasks',component:TasksComponent,canActivate:[AuthGuardService]},
  {path:'addTask',component:AddTaskComponent,canActivate:[AuthGuardService]},
  {path:'update/:id',component:UpdateTaskComponent,canActivate:[AuthGuardService]},
  {path:'updateProfile',component:UpdateUserComponent,canActivate:[AuthGuardService]},
  {path:'**',component:NotfoundComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
