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
  user: userInfo = this.fetchUserDataService.user;
  constructor(
    private router: Router,
    private fetchUserDataService: FetchUserDataService
  ) {}
  public async ngOnInit() {}
  async signOut() {
    localStorage.clear();
    await this.router.navigateByUrl('');
  }
}
