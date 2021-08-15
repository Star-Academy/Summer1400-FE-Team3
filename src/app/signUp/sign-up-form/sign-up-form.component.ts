import {Component, OnInit} from '@angular/core';
import {FetchUserDataService} from "../../services/fetch-user-data.service";
import {SignUpModel} from "../../models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  email: string = ""
  password: string = ""
  username: string = ""
  firstName: string = ""
  lastName: string = ""

  constructor(private fetchDataService: FetchUserDataService, private router: Router) {
  }

  ngOnInit(): void {
  }

  register(formValues: any) {
    const user: SignUpModel = {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      firstName: formValues.firstName,
      lastName: formValues.lastName
    }
    this.fetchDataService.signUpSubmit(user).subscribe((result) => {
        this.router.navigateByUrl("/signIn")
      },
      (response) => {
        alert(response.message)
      })

  }

}
