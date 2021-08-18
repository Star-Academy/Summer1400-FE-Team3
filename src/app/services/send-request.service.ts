import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SendRequestService {
  constructor() {}

  public static async sendRequest(url: string,hasJson:boolean, body?: object): Promise<any> {
    const init: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (body) {
      init.method = 'POST';
      init.body = JSON.stringify(body);
      if (url.includes("https://songs.code-star.ir/user/one/"))
        init.cache="no-cache";
      // if (url==="https://songs.code-star.ir/user/alter")
      //   init.mode="no-cors";
    }

    return fetch(url, init).then((res) => {
      if (res.ok) {
          if (hasJson)
            return res.json();
          return;
      }
      console.log("hhh")
      throw res.json();
    });
  }
}
