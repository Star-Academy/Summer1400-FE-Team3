import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private fetchDataService: FetchDataService
  ) {}
  username: string = this.fetchDataService.fetchUsername().username;
  ngOnInit(): void {}
  signOut() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }
}
