
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { RatedMoviesComponent } from './rated-movies/rated-movies.component';

const routes: Routes = [
  { path: 'movies', component: MoviesListComponent },
  { path: 'rated_movies', component: RatedMoviesComponent },
  { path: 'movies/:id', component: MovieDetailsComponent }


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
