import { Component, OnInit } from '@angular/core';
import {IMovieList} from './model/movie-list.model';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  public selectorName: string;
  public moviesList: IMovieList[];
  public  selectedMovie: string;
  firstmovie;

  constructor() {
    this.selectorName = 'Chan Selector';
    this.moviesList = [
      {
        name: 'Jordon',
        id: 23
      },
      {
        name: 'Joans',
        id: 12
      },
      {
        name: 'Forwer',
        id: 16
      }
    ];
  }

  ngOnInit() {
    this.selectedMovie = this.moviesList[0].name;
  }

  getMovie() {
    console.log(`Selected Movie: ${this.selectedMovie}`);
  }

  onChangeFav(movie) {
    console.log(`Movie: ${movie.id}`);
  }

}
