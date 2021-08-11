import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private http: HttpClient) {}

  public signUpSubmit(user: object) {
    const headers = {
      'Content-Type': 'application/json;charset=utf-8',
    };

    this.http.post<any>(
      'https://songs.code-star.ir/api-docs/user/register',
      JSON.stringify(user),
      { headers }
    );
  }
}
