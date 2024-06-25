
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INews } from '../components/schemas/news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'http://localhost:3000/news'
  constructor( private http: HttpClient) { }

  getNews(): Observable<INews[]>{
    return this.http.get<INews[]>(this.url)
  }
  getOne(id: number){
    return this.http.get<INews>(`${this.url}/${id}`)
  }
}
