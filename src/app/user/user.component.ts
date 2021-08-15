import { Component, OnInit } from '@angular/core';
import {userInfo} from "../models";
import {FetchUserDataService} from "../services/fetch-user-data.service";
import {FetchSongDataService} from "../services/fetch-song-data.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user!:userInfo;
  constructor(private fetchUserDataService:FetchUserDataService) { }

  public async ngOnInit() {
    this.user =await this.fetchUserDataService.fetchUsername();
  }

}
