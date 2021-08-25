import {Component} from '@angular/core';
import {userInfo} from '../../models';

@Component({
  selector: 'app-user-aside',
  templateUrl: './user-aside.component.html',
  styleUrls: ['./user-aside.component.scss'],
})
export class UserAsideComponent {
  public user!: userInfo;
}
