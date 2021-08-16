import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { SignUpModel, userInfo } from '../models';
import { SendRequestService } from './send-request.service';

@Injectable({
  providedIn: 'root',
})
export class FetchUserDataService implements OnInit{
  constructor(private http: HttpClient) {
  }
  public async ngOnInit(){
    await this.fetchUsername();
    console.log("hhh")
  }
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

  async fetchUsername(){
    const userToken = {
      token: localStorage.getItem('token'),
    };
    const { id } = await SendRequestService.sendRequest(
      'https://songs.code-star.ir/user/auth',
      userToken
    );
    const { user } = await SendRequestService.sendRequest(
      `https://songs.code-star.ir/user/one/${id}`
    );
    localStorage.setItem("user",JSON.stringify(user));
  }

  async fetchAlterProfile(base64: any) {
    const details = {
      token: localStorage.getItem('token'),
      avatar: base64,
    };
    console.log(base64);
    await SendRequestService.sendRequest(
      'https://songs.code-star.ir/user/alter',
      details
    );
  }
}
