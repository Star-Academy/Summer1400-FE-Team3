import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignInFormComponent } from './sign-in-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FetchUserDataService } from '../../services/fetch-user-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('SignInFormComponent', () => {
  let component: SignInFormComponent;
  let fixture: ComponentFixture<SignInFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [FetchUserDataService],
    });
    await TestBed.configureTestingModule({
      declarations: [SignInFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('validate email should return true', () => {
    let email = 'parmida@gmail.com';
    expect(component.validateEmail(email)).toBeTruthy();
  });

  it('validate email should return false', () => {
    let email = 'parmida';
    expect(component.validateEmail(email)).toBeFalse();
  });
});
