import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: any[] = [];
  ratings: any[] = [];
  pageNumber: number = 1;

  constructor(public movieService: MovieService) {

  }
  ngOnInit(): void {

    this.movieService.getMovies().subscribe(
      {
        next: (v) => {
          this.movies = v
        },
        error: (e) => {
          console.log(e)
        },
        complete: () => {
          console.info('complete')

        }
      }
    )

    this.movieService.getRatings(1).subscribe(
      {
        next: (v) => {
          console.log(v)
          this.ratings = v
        },
        error: (e) => {
          console.log(e)
        },
        complete: () => {
          console.info('complete')

        }
      }
    )
  }


  addRating(rating: number, movie: string) {


    this.movieService.addRating(1, rating, movie).subscribe(
      {
        next: (v) => {
          console.log(v)

        },
        error: (e) => {
          console.log(e)
        },
        complete: () => {
          console.info('complete')

        }
      }
    )
  }



  findRating(title: string) {

    const foundRating = this.ratings.find(row => row.column === 'rating:'+title);

    if (foundRating)
      return foundRating.$
    return foundRating
  }
}



