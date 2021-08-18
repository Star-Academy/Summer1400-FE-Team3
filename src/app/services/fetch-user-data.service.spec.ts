import { TestBed } from '@angular/core/testing';

import { FetchUserDataService } from './fetch-user-data.service';
import {SignInModel_username} from "../models";
import {of} from "rxjs";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('FetchDataService', () => {
  // let service: FetchUserDataService;
  let fetchUserDataService:FetchUserDataService, mockHttp:any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FetchUserDataService]
    })
    mockHttp=jasmine.createSpyObj('mockhttp',['post']);
    fetchUserDataService=new FetchUserDataService(mockHttp);
    TestBed.configureTestingModule({});
    fetchUserDataService = TestBed.inject(FetchUserDataService);
  });

  it('should be created', () => {
    expect(fetchUserDataService).toBeTruthy();
  });
  describe('signInSubmit',()=>{
    it('should call http.post with the right body', function () {
      let user:SignInModel_username={
        username:"parmida",
        password:"12345678"
      }
      let userString='"username":"parmida","password":"12345678"';
      mockHttp.post.and.returnValue(of(false));
      fetchUserDataService.signInSubmit(user);
      expect(mockHttp.post).toHaveBeenCalledWith('https://songs.code-star.ir/user/login',userString,jasmine.any(Object))
    });
  })
});
