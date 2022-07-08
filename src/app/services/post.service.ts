import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rates, Comments } from '../classes/comments'

@Injectable({
  providedIn: 'root'
})

export class PostService{
  public country = 'ZAR'

  private url = 'https://api.exchangerate.host/latest?base='+this.country;

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Rates[]>{
    return this.httpClient.get<Rates[]>(this.url);
  }

  getComments(): Observable<Comments[]>{
    return this.httpClient.get<Comments[]>(this.url);
  }

  setPost(params: string): Observable<Rates[]>{
    this.country = params;
    return this.httpClient.get<Rates[]>(this.url);
  }

  setComments(params: string): Observable<Comments[]>{
    this.country = params;
    return this.httpClient.get<Comments[]>(this.url);
  }
}
