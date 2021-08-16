import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SendRequestService {
  constructor() {}

  public static async sendRequest(url: string, body?: object): Promise<any> {
    const init: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (body) {
      init.method = 'POST';
      init.body = JSON.stringify(body);
    }

    return fetch(url, init).then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw res.json();
    });
  }
}
