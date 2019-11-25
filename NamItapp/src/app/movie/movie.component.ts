import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';
import { MOVIEDETAILS } from '../classes/movieDetails';
import { IMAGS } from '../classes/images';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  public movieId: string;
  public movie;
  public data = MOVIEDETAILS;
  public imags = IMAGS;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get("id");
    this.movie = this.data[this.movieId];
    console.log(this.movieId);
  }

}
