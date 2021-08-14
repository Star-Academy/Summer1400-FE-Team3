import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { SignUpModel, userInfo } from '../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
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

  // let promise = new Promise((resolve, reject) => {
  //   let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
  //   this.http.get(apiURL)
  //     .toPromise()
  //     .then(
  //       res => { // Success
  //         console.log(res.json());
  //         resolve();
  //       }
  //     );
  // });

  fetchUsername(): userInfo {
    const id: number = this.findID();
    this.findUserInfo(id);
    // this.findID().subscribe(
    //   (result: any) => {
    //     this.findUserInfo(result.id).subscribe(
    //       (result: any) => {
    //         this.user = result.user;
    //         console.log(this.user);
    //       },
    //       (response: any) => {
    //         alert(response.message);
    //         this.user = {
    //           id: 0,
    //           username: '',
    //           email: '',
    //           first_name: '',
    //           last_name: '',
    //           avatar: '',
    //           gender: '',
    //           birth_date: '',
    //         };
    //       }
    //     );
    //   },
    //   (response: any) => {
    //     alert(response.message);
    //     this.user = {
    //       id: 0,
    //       username: '',
    //       email: '',
    //       first_name: '',
    //       last_name: '',
    //       avatar: '',
    //       gender: '',
    //       birth_date: '',
    //     };
    //   }
    // );
    console.log(this.user);
    return this.user;
  }

  findID(): number {
    let id: number = 0;
    const userToken = {
      token: localStorage.getItem('token'),
    };

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
      }),
    };
    this.http
      .post(
        'https://songs.code-star.ir/user/auth',
        JSON.stringify(userToken),
        options
      )
      .toPromise()
      .then((result: any) => {
        id = result.id;
      })
      .catch((error) => {
        alert(error.message);
      });
    return id;
  }

  findUserInfo(id: number) {
    this.http
      .get<any>(`https://songs.code-star.ir/user/one/${id}`)
      .toPromise()
      .then((result) => {
        this.user = result.user;
      })
      .catch((error) => {
        alert(error.message);
      });
  }
}
