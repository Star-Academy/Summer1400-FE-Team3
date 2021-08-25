import {Component, OnInit} from '@angular/core';
import {userInfo} from "../../../models";
import {FetchUserDataService} from "../../../services/fetch-user-data.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  public user!: userInfo;

  constructor(private fetchUserData: FetchUserDataService) {
  }

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
