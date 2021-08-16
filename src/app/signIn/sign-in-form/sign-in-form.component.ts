import { Component, OnInit } from '@angular/core';
import { FetchUserDataService } from '../../services/fetch-user-data.service';
import { SignInModel_username, signInModel_email } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  email: string = '';
  password: string = '';
  username: string = '';

  constructor(
    private fetchDataService: FetchUserDataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  validateEmail(info: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(info).toLowerCase());
  }

   login(formValues: any) {
    if (this.validateEmail(formValues.email)) {
      const user_email: signInModel_email = {
        email: formValues.email,
        password: formValues.password,
      };

      this.fetchDataService.signInSubmit(user_email).subscribe(
        async(result) => {
          console.log(result);
          localStorage.setItem('token', result.token);
          await this.fetchDataService.fetchUsername();
          await this.router.navigateByUrl('/user');
        },
        (response) => {
          alert(response.message);
        }
      );
    } else {
      const user_username: SignInModel_username = {
        username: formValues.email,
        password: formValues.password,
      };
      this.fetchDataService.signInSubmit(user_username).subscribe(
        async(result) => {
          console.log(result);
          localStorage.setItem('token', result.token);
          await this.router.navigateByUrl('/user');
        },
        (response) => {
          alert(response.message);
        }
      );
    }
  }
}
