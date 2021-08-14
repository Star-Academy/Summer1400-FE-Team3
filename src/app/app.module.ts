import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { HeaderComponent } from './home/header/header.component';
import { BackgroundComponent } from './home/background/background.component';
import { FooterComponent } from './home/footer/footer.component';
// @ts-ignore
import { SignInComponent } from './signIn';
import { SignUpComponent } from './signUp';
import { appRoutingModule } from './app-routing.module';
import { FormHeaderComponent } from './signIn/form-header/form-header.component';
import { SignInFormComponent } from './signIn/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './signUp/sign-up-form/sign-up-form.component';
import { HttpClientModule } from '@angular/common/http';
import {FetchDataService} from './services/fetch-data.service';
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackgroundComponent,
    FooterComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    FormHeaderComponent,
    SignInFormComponent,
    SignUpFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    appRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
