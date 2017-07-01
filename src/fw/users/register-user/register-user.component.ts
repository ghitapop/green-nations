import { Router } from '@angular/router';
import { UserAPI } from 'fw/users/user.api';
import { NgForm } from '@angular/forms/src/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  formError: string;
  registering = false;

  constructor(private userAPI: UserAPI, private router: Router) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    if(form.valid) {
      console.log('registering...', form);
      this.registering = true;
      this.formError = null;

      this.userAPI.register(form.value.username, form.value.password, form.value.email)
        .subscribe((data) => {
          console.log('got valid: ' + data);
          this.router.navigate(['/authenticated']);
        },
        (error) => {
          this.registering = false;
          console.log('got error: ', error);
          this.formError = error;
        }
      );
    }
  }

}
