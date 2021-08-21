import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FetchUserDataService } from './fetch-user-data.service';
import { SignInModel_username } from '../models';

describe('#EmployeeService.addEmploye()', () => {

  let userService: FetchUserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FetchUserDataService],
    });
    userService = TestBed.inject(FetchUserDataService);
  });

  it('should sign in', function () {
    const newUser: SignInModel_username = { username: 'Mahesh', password: "12345678" };
    const userString: string= '{"username":"Mahesh","password":"12345678"}';
    spyOn((userService as any).http,"post").and.callFake((url:any,body:any,options:any)=>{
      expect(url).toEqual('https://songs.code-star.ir/user/login');
      expect(body).toEqual(userString);

    });
    userService.signInSubmit(newUser);
  });


});
