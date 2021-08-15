import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {userInfo} from "../../models";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  @Input() user!:userInfo;
  constructor(
    private router: Router
  ) {}
   public async ngOnInit() {
   }
  async signOut() {
    localStorage.clear();
    await this.router.navigateByUrl('');
  }
}
