import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  show: boolean = true;

  user: LoginForm = {
    email: '',
    password: ''
  }
  errorMessage!: string;
  loggedIn: boolean = false
  @Output() valueChange = new EventEmitter()
  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location) { }

  onSubmit() {

    // this.authService.login(this.user.email, this.user.password).subscribe({
    //   next: (v) => {
    //     this.loggedIn = true
    //     this.valueChange.emit(this.user.email)
    //   },
    //   error: (e) => {
    //     if (e.status === 401) {
    //       this.errorMessage = "Invalid credentials"
    //     }

    //   },
    //   complete: () => {

    //   }
    // })
  }

}
