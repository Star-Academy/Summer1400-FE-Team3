import { Component, OnInit } from '@angular/core';
import { FetchUserDataService } from 'src/app/services/fetch-user-data.service';
import { userInfo } from '../../models';

@Component({
  selector: 'app-user-aside',
  templateUrl: './user-aside.component.html',
  styleUrls: ['./user-aside.component.scss'],
})
export class UserAsideComponent implements OnInit {
  public user!: userInfo;
  constructor(private fetchUserData: FetchUserDataService) {}

  public ngOnInit(): void {
    this.user = JSON.parse(<string>localStorage.getItem('user'));
  }

  public avatarChange(event: any) {
    let image = event.target.files[0];

    const reader = new FileReader();
    reader.onloadend = async () => {
      this.user.avatar = reader.result;
      localStorage.setItem('user', JSON.stringify(this.user));
      await this.fetchUserData.fetchAlterProfile(reader.result);
    };
    reader.readAsDataURL(image);
  }
}
