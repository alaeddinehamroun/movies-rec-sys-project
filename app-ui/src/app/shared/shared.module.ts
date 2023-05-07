import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './error404/error404.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { TitlePipe } from '../pipes/title.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    Error404Component,
    TitlePipe
  ],

  imports: [
    AuthModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],

  exports: [
    FooterComponent,
    NavbarComponent,
    Error404Component,
    TitlePipe
  ],
})
export class SharedModule { }
