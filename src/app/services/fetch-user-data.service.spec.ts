// import { TestBed } from '@angular/core/testing';

// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';

// import { FetchUserDataService } from './fetch-user-data.service';
// import { SignInModel_username } from '../models';
// import { of } from 'rxjs';

// describe('FetchDataService', () => {
//   // let service: FetchUserDataService;
//   let fetchUserDataService: FetchUserDataService,
//     mockHttp: HttpTestingController;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [FetchUserDataService],
//     });
//     //mockHttp = jasmine.createSpyObj('mockhttp', ['post']);
//     mockHttp = TestBed.get(HttpTestingController);
//     fetchUserDataService = new FetchUserDataService(mockHttp);
//     TestBed.configureTestingModule({});
//     fetchUserDataService = TestBed.inject(FetchUserDataService);
//   });

//   it('should be created', () => {
//     expect(fetchUserDataService).toBeTruthy();
//   });
//   describe('signInSubmit', () => {
//     it('should call http.post with the right body', function () {
//       let user: SignInModel_username = {
//         username: 'parmida',
//         password: '12345678',
//       };
//       let userString = '"username":"parmida","password":"12345678"';
//       mockHttp.post.and.returnValue(of(false));
//       fetchUserDataService.signInSubmit(user);
//       expect(mockHttp.post).toHaveBeenCalledWith(
//         'https://songs.code-star.ir/user/login',
//         userString,
//         jasmine.any(Object)
//       );
//     });
//   });
// });

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

// import { Employee } from './employee';
// import { EmployeeService } from './employee.service';

import { FetchUserDataService } from './fetch-user-data.service';
import { SignInModel_username } from '../models';

describe('#EmployeeService.addEmploye()', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let userService: FetchUserDataService;

  beforeEach(() => {
    //Configures testing app module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FetchUserDataService],
    });

    //Instantaites HttpClient, HttpTestingController and EmployeeService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    userService = TestBed.inject(FetchUserDataService);
  });

  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  //Test case 1
  it('should add an employee and return it', () => {
    //const newUser: SignInModel_username = { username: 'Mahesh', password: "12345678" };
    let newUser: SignInModel_username = {
      username: 'parmida',
      password: '12345678',
    };
    let userString = '{"username":"parmida","password":"12345678"}';
    // userService
    //   .signInSubmit(newUser)
    //   .subscribe(
    //     (data) => expect(data).toEqual(newUser, 'should return the user'),
    //     fail
    //   );

    // addEmploye should have made one request to POST employee
    const req = httpTestingController.expectNone(
      'https://songs.code-star.ir/user/login'
    );
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newUser);

    // Expect server to return the employee after POST
    const expectedResponse = new HttpResponse({
      status: 201,
      statusText: 'Created',
      body: userString,
    });
    req.event(expectedResponse);
  });

  //Test case 2
  // it('should turn 404 error into return of the requested employee', () => {
  //   const newEmp: Employee = { name: 'Mahesh', age: 25 };

  //   empService.addEmployee(newEmp).subscribe(
  //     data => expect(data).toEqual(newEmp, 'should return the employee'),
  //     fail
  //   );

  //   const req = httpTestingController.expectOne(empService.empUrl);

  //   // respond with a 404 and the error message in the body
  //   const msg = '404 error';
  //   req.flush(msg, { status: 404, statusText: 'Not Found' });
  // });
});
