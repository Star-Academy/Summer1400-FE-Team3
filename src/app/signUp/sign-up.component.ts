import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private router: Router) {}

  public async ngOnInit(): Promise<void> {
    if (localStorage.length !== 0) {
      await this.router.navigateByUrl('/user');
    }
  }
}
