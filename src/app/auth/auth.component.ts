import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from './patient';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  patient: Patient = new Patient();
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.logIn(this.patient)
      .then((response) => {
        localStorage.setItem('id_token', response.json().id_token);
        this.router.navigate(['home']);
      })
      .catch((error: any) => {
        if (error.status === 400) {
          this.errorMessage = 'You must send the username and the password';
        } else {
          this.errorMessage = 'The username or password dont match'
        }
      });
  }

}
