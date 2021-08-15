import {Component, Input, OnInit} from '@angular/core';
import {userInfo} from "../../models";

@Component({
  selector: 'app-user-aside',
  templateUrl: './user-aside.component.html',
  styleUrls: ['./user-aside.component.scss']
})
export class UserAsideComponent implements OnInit {
  @Input() user!:userInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
