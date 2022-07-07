import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from '../classes/comments'

@Injectable({
  providedIn: 'root'
})
export class PostService{
  private url = 'https://api.exchangerate.host/latest?base=ZAR';

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Comments[]>{
    console.warn(this.httpClient.get<Comments[]>(this.url));
    return this.httpClient.get<Comments[]>(this.url);
  }
}
