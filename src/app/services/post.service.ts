import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rates, Comments } from '../classes/comments'
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class PostService{
  private url = 'https://api.exchangerate.host/latest?base=ZAR';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Rates[]>{
    return this.http.get<Rates[]>('${this.url}');
  }
}
