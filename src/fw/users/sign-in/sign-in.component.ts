import { Router } from '@angular/router';
import { UserAPI } from 'fw/users/user.api';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/src/forms";

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formError: string;
  submitting = false;

  constructor(private userAPI: UserAPI, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if(form.valid) {
      console.log('submitting...', form);
      this.submitting = true;
      this.formError = null;

      this.userAPI.signIn(form.value.username, form.value.password, form.value.rememberMe)
        .subscribe((data) => {
          console.log('got valid: ' + data);
          this.router.navigate(['/authenticated']);
        },
        (error) => {
          this.submitting = false;
          console.log('got error: ', error);
          this.formError = error;
        }
      );
    }
  }

}
