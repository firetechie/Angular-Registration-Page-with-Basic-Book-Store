import { HttpClient } from '@angular/common/http';
import { ApiService } from './../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userModel } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;
  userModelObj: userModel = new userModel();
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router // private api: ApiService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobile: [''],
    });
  }

  signUp() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    this.http
      .post<any>(`http://localhost:3000/signupUsers`, this.signupForm.value)
      .subscribe(
        (res) => {
          // this.apiService
          //   .register(this.signupForm.value)
          //   .pipe(first())
          //   .subscribe(
          //     (data) => {
          console.log(res);
          alert('Sign Up Is Done Succesfully');
          this.signupForm.reset();
          this.router.navigate(['login']);
        },
        (err) => {
          alert('Something went wrong');
        }
      );
  }
}
