import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.css']
})
export class RecommendedMoviesComponent implements OnInit {


  recs: any[] = [];

  constructor(public movieService: MovieService) {

  }
  ngOnInit(): void {

    this.movieService.getRecommendations(1).subscribe(
      {
        next: (v) => {
          this.recs = v
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

}
