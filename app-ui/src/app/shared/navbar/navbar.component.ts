import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  email!: string;
  isShown = false;
  numberOfWishes: number = 0;
  constructor(private router: Router, public authService: AuthService) {

  }
  ngOnInit(): void {

  }

  hideLogin(value: string) {
    if (value)
      this.email = value
    if (value && this.isShown) {

      this.isShown = !this.isShown
    }
  }



}
