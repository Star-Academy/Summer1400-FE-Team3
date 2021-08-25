import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainHeaderComponent } from './main-header.component';

describe('MainHeaderComponent', () => {
  let component: MainHeaderComponent;
  let fixture: ComponentFixture<MainHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainHeaderComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeaderComponent);
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
