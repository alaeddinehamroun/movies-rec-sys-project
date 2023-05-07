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

  // Get movie by id
  getMovieById(movie_id: string) {
    return this.http.get<any[]>(this.SERVER_URL + `movies/${movie_id}`)
  }


  // Get ratings
  getRatings(user_id: Number) {
    return this.http.get<any[]>(this.SERVER_URL + `ratings/${user_id}`)
  }

  // Add rating
  addRating(user_id: Number, rating: Number, movieId: string) {


    return this.http.post(this.SERVER_URL + "ratings", { userId: user_id, movieId: movieId, rating: rating })

  }


  // Get recommendations
  getRecommendations(user_id: Number) {
    return this.http.get<any[]>(this.SERVER_URL + `recommendations/${user_id}`)
  }

}
