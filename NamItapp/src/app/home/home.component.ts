import { Component, OnInit } from '@angular/core';
import { MOVIE } from '../classes/movie'
import { Router } from '@angular/router';
import { IMAGS } from '../classes/images';
import { MOVIEDETAILS } from '../classes/movieDetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movies = MOVIE;
  public details = MOVIEDETAILS;
  public imags = IMAGS;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selected(id){
    this.router.navigate(['/movie', id]);
  }

}
