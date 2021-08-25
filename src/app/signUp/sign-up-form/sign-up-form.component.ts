import {Component} from '@angular/core';
import {FetchUserDataService} from '../../services/fetch-user-data.service';
import {SignUpModel} from '../../models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  public email: string = '';
  public password: string = '';
  public username: string = '';
  public firstName: string = '';
  public lastName: string = '';

  constructor(
    private fetchDataService: FetchUserDataService,
    private router: Router
  ) {
  }

  register(formValues: any) {
    const user: SignUpModel = {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
    };
    this.fetchDataService.signUpSubmit(user).subscribe(
      async (result) => {
        await this.router.navigateByUrl('/signIn');
      },
      (response) => {
        alert(response.error.message);
      }
    );
  }
}
