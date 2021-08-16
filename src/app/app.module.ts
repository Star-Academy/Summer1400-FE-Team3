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
import {FetchUserDataService} from './services/fetch-user-data.service';
import {FormsModule} from "@angular/forms";
import { UserComponent } from './user';
import { MainHeaderComponent } from './user/main-header/main-header.component';
import { UserAsideComponent } from './user/user-aside/user-aside.component';
import { SongListComponent } from './user/song-list/song-list.component';
import { FavoriteListComponent } from './user/favorite-list/favorite-list.component';
import { CardComponent } from './card/card.component';
import {FetchSongDataService} from "./services/fetch-song-data.service";
import {SendRequestService} from "./services/send-request.service";
import { SongsPageComponent } from './songs-page/songs-page.component';
import { FilterSongsComponent } from './songs-page/filter-songs/filter-songs.component';
import { SearchSongsComponent } from './songs-page/search-songs/search-songs.component';
import { SongsListComponent } from './songs-page/songs-list/songs-list.component';
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
    UserComponent,
    MainHeaderComponent,
    UserAsideComponent,
    SongListComponent,
    FavoriteListComponent,
    CardComponent,
    SongsPageComponent,
    FilterSongsComponent,
    SearchSongsComponent,
    SongsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    appRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FetchUserDataService,FetchSongDataService,SendRequestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
