import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
import { RegisterComponent } from './register/register.component';
import { StudAuthGuard } from './stud-auth.guard';
import { StudentServiceComponent } from './student-service/student-service.component';

const routes: Routes = [
  {path: '', component: MainnavbarComponent},
  {path:'register', component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'studentservice',component:StudentServiceComponent, canActivate:[StudAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
