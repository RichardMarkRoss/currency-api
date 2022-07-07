import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { Component, AfterViewInit } from '@angular/core';
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
export class AppComponent implements AfterViewInit {
  private url = 'https://api.exchangerate.host/latest?base=ZAR';

  public comments: Comments[];


  constructor(private services:HttpClient) {
    this.comments = [];
  }

  submit(form: NgForm) {
    console.warn(form.value);
}

  getPosts(): Observable<Comments[]>{
    return this.services.get<Comments[]>(this.url);
  }


  ngAfterViewInit(){
    this.getPosts()
    .subscribe(response => {
      this.comments = response;
      console.log(response);
      console.log(this.comments);
    }
    );
  }


}

