import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RatedMoviesComponent } from './rated-movies/rated-movies.component';
import { RecommendedMoviesComponent } from './recommended-movies/recommended-movies.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MovieRoutingModule } from './movie-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDetailsComponent,
    RatedMoviesComponent,
    RecommendedMoviesComponent,
    MovieCardComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    CommonModule,
    MovieRoutingModule,
    NgxPaginationModule

  ]
})
export class MovieModule { }
