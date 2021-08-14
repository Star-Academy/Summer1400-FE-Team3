import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {SignUpModel} from "../models";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private http: HttpClient) {}

  public signUpSubmit(user: SignUpModel ) {
    console.log(JSON.stringify(user))
    const options= {headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'})}
    return this.http.post<any>(
      'https://songs.code-star.ir/user/register',
      JSON.stringify(user),
      options
    )
  }
  private handleError<T> (operation='operation', result?:T) {
    return (error:any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
