import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {userInfo} from '../../models';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  user: userInfo = {
    id: 0,
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
    gender: '',
    birth_date: '',
  };

  constructor(private router: Router) {
  }

  public async ngOnInit(): Promise<void> {
    this.user = JSON.parse(<string>localStorage.getItem('user'));
  }

  public async signOut(): Promise<void> {
    localStorage.clear();
    await this.router.navigateByUrl('');
  }
}
