import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home";
import {SignInComponent} from "./signIn";
import {SignUpComponent} from "./signUp";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'signIn', component:SignInComponent},
  {path:'signUp', component:SignUpComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingModule= RouterModule.forRoot(routes);
