import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { INews } from '../schemas/news';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent{
 constructor (private httpService: HttpService, private route: ActivatedRoute){
 }

 news: INews
 id:number = this.route.snapshot.params['id']
 
 news$ = this.httpService.getOne(this.id).subscribe(data => this.news = data);

}
