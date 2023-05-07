import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-rated-movies',
  templateUrl: './rated-movies.component.html',
  styleUrls: ['./rated-movies.component.css']
})
export class RatedMoviesComponent implements OnInit, AfterViewInit {
  @ViewChild('rating-1') ratingElement!: ElementRef;

  pageNumber: number = 1;
  ratings: any[] = [];
  checkedInput: any;

  constructor(public movieService: MovieService) {


  }
  ngAfterViewInit() {
    const checkedInput = this.ratingElement.nativeElement.querySelector('input:checked');
    console.log(checkedInput);
  }
  ngOnInit(): void {
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



  // findRating(title: string) {

  //   const foundRating = this.ratings.find(row => row.column === title);

  //   if (foundRating)
  //     return foundRating.$
  //   return foundRating
  // }
}
