import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BakeComponent }      from './bake/bake.component';
import { EatComponent } from './eat/eat.component';
import { CountComponent } from './count/count.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'login/home',
    component: HomeComponent,
    children: [
      {
        path: 'bake',
        component: BakeComponent
      },
      {
        path: 'eat',
        component: EatComponent
      },
      {
        path: 'count',
        component: CountComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
 ]
@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
   // CommonModule
  
  declarations: []
})
export class AppRoutingModule { }
