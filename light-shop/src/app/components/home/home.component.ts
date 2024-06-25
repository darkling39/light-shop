import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, count, map, of } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private httpService: HttpService, private router: Router){}

  news$ = this.httpService.getNews()
  numberOfResults: number 
  term: string = ''
  
  ngOnInit(): void {
    console.log(this.numberOfResults);
    this.news$.subscribe(data => {
      this.numberOfResults = data.length
    })
  }

}
