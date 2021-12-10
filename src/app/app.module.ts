import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from './services/auth.service';
import {HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProfileComponent } from './views/profile/profile.component'
import { UserService } from './services/user.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { TasksComponent } from './views/tasks/tasks.component';
import { AddTaskComponent } from './views/add-task/add-task.component';
import { UpdateTaskComponent } from './views/update-task/update-task.component';
import { UpdateUserComponent } from './views/update-user/update-user.component';
import { AuthGuardService } from './services/auth-guard.service';
import { TaskService } from './services/task.service';
import { NotfoundComponent } from './views/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    LoginComponent,
    ProfileComponent,
    TasksComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    UpdateUserComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuardService,
    TaskService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
