import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchUserDataService } from 'src/app/services/fetch-user-data.service';
import { userInfo } from '../../models';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  user: userInfo={
    id: 0,
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
    gender: '',
    birth_date: '',
  };
  constructor(
    private router: Router
  ) {}
  public async ngOnInit() {
      this.user=JSON.parse(<string>localStorage.getItem("user"));
  }
  async signOut() {
    localStorage.clear();
    await this.router.navigateByUrl('');
  }
}
