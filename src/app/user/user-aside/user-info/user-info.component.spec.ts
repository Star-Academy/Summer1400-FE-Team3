import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoComponent } from './user-info.component';
import {FetchUserDataService} from "../../../services/fetch-user-data.service";
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoComponent ],
      providers: [FetchUserDataService, HttpClient, HttpHandler],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update user', async () => {
    const temp =
      '{"username": "kim","id": 1,"email": "","first_name": "k","last_name": "k","avatar": "m","gender": "f","birth_date": ""}';

    spyOn(localStorage, 'getItem').and.returnValue(temp);

    component.ngOnInit();
    expect(component.user).toEqual({
      username: 'kim',
      id: 1,
      email: '',
      first_name: 'k',
      last_name: 'k',
      avatar: 'm',
      gender: 'f',
      birth_date: '',
    });
  });

});
