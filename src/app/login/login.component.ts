import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  result: any;
  constructor(private fb: FormBuilder, private service: AuthService, private router: Router) {
  }
  // angular life cycle hooks
  ngOnInit() {
    this.createForm();
    console.log("ngOnit");
  }
  ngOnDestroy() {
    console.log("ngDestroy");
  }
  // reactive form fields
  createForm() {
    this.form = this.fb.group({
      userName: ["", [Validators.required]],
      password: ["", Validators.required]
    });
  }
  // POST: login submit
  loginSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.service.loginSubmit(this.form.value).subscribe(((res: any) => {
        console.log("res");
        this.result = res;
        // setting token in localstorage
        localStorage.setItem("token", res.id);
        // navigation to home page
        this.router.navigate(["/home"]);
      }), (error: any) => {
        console.log(error);
      });
    } else {
      alert("Form is invalid");
    }
  }
  // forgot password
  forgotpassword() {
    console.log("forgot");

  }
}
