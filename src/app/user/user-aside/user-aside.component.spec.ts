import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FetchUserDataService } from 'src/app/services/fetch-user-data.service';

import { UserAsideComponent } from './user-aside.component';

describe('UserAsideComponent', () => {
  let component: UserAsideComponent;
  let fixture: ComponentFixture<UserAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAsideComponent],
      providers: [FetchUserDataService, HttpClient, HttpHandler],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAsideComponent);
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

    await component.ngOnInit();
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
