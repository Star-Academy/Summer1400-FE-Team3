import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FavPageComponent} from './fav-page/fav-page.component';
import {HomeComponent} from './home';
import {SignInComponent} from './signIn';
import {SignUpComponent} from './signUp';
import {SongsPageComponent} from './songs-page/songs-page.component';
import {UserComponent} from './user';
import {SongPageComponent} from "./song-page/song-page.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'user', component: UserComponent},
  {path: 'songsPage', component: SongsPageComponent},
  {path: 'favPage', component: FavPageComponent},
  {path: 'song/:id', component: SongPageComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

export const appRoutingModule = RouterModule.forRoot(routes);
