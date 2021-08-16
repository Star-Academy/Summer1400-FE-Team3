import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FetchUserDataService } from 'src/app/services/fetch-user-data.service';
import { userInfo } from '../../models';

@Component({
  selector: 'app-user-aside',
  templateUrl: './user-aside.component.html',
  styleUrls: ['./user-aside.component.scss'],
})
export class UserAsideComponent implements OnInit {
  @Input() user!: userInfo;
  @Output()
  userAvatar: EventEmitter<any> = new EventEmitter<any>();
  constructor(private fetchUserData: FetchUserDataService) {}

  ngOnInit(): void {}

  avatarChange(event: any) {
    let image = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = async () => {
      this.user.avatar = reader.result;
      this.userAvatar.emit(reader.result);
      await this.fetchUserData.fetchAlterProfile(reader.result);
    };
    reader.readAsDataURL(image);
  }
}
