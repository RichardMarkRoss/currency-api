import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from './classes/comments';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private url = 'https://api.exchangerate.host/latest?base=ZAR';
  public posts:any;
  comments: Comments[] = [];
  constructor(private services:HttpClient) {
    this.comments = [];
  }
  getPosts(): Observable<Comments[]>{
    return this.services.get<Comments[]>(this.url);
  }
  ngAfterViewInit(){
    this.getPosts()
    .subscribe(response => {
      this.comments = response;
    }
    );
  }
}

