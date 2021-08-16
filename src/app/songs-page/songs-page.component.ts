import { Component, OnInit } from '@angular/core';
import { userInfo } from '../models';
import { FetchUserDataService } from '../services/fetch-user-data.service';
import { UserComponent } from '../user';

@Component({
  selector: 'app-songs-page',
  templateUrl: './songs-page.component.html',
  styleUrls: ['./songs-page.component.scss'],
})
export class SongsPageComponent implements OnInit {
  ngOnInit(): void {}
}
