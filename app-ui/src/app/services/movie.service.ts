import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class MovieService {

  user_id = 1;

  private SERVER_URL = environment.SERVER_URL
  constructor(private http: HttpClient) { }

  // Get All movies
  getMovies() {
    return this.http.get<any[]>(this.SERVER_URL + `movies`)
  }



  // Get ratings
  getRatings(user_id: Number) {
    return this.http.get<any[]>(this.SERVER_URL + `ratings/${user_id}`)
  }
  // Add rating
  addRating(user_id: Number, rating: Number, movie: string) {


    return this.http.post(this.SERVER_URL + "ratings", { user_id: user_id, movie: movie, rating: rating })

  }

}
