import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInFormComponent } from './sign-in-form.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FetchUserDataService} from "../../services/fetch-user-data.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('SignInFormComponent', () => {
  let component: SignInFormComponent;
  let fixture: ComponentFixture<SignInFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers: [SignInFormComponent]
    })
    await TestBed.configureTestingModule({
      declarations: [ SignInFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  let email="parmida@gmail.com"
  it('validate email should return true', () => {
    expect(component.validateEmail(email)).toBeTruthy();
  });
  email="parmida"
  it ('validate email should return false',()=> {
    expect(component.validateEmail(email)).toBeFalse();
  })

});
