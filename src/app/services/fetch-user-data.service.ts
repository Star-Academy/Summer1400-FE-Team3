import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { SignUpModel, userInfo } from '../models';
import {SendRequestService} from "./send-request.service";

@Injectable({
  providedIn: 'root',
})
export class FetchUserDataService {
  constructor(private http: HttpClient) {}
  user: userInfo = {
    id: 0,
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
    gender: '',
    birth_date: '',
  };

  public signUpSubmit(user: SignUpModel) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
      }),
    };
    return this.http.post<any>(
      'https://songs.code-star.ir/user/register',
      JSON.stringify(user),
      options
    );
  }
  public signInSubmit<T>(user: T) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
      }),
    };
    return this.http.post<any>(
      'https://songs.code-star.ir/user/login',
      JSON.stringify(user),
      options
    );
  }

  async fetchUsername(): Promise<userInfo> {
    const userToken = {
      token: localStorage.getItem('token'),
    };
    const {id} = await SendRequestService.sendRequest('https://songs.code-star.ir/user/auth',userToken);
    const {user}=  await SendRequestService.sendRequest(`https://songs.code-star.ir/user/one/${id}`)
    return user;
  }
}
