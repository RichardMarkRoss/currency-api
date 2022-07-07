import { Component, OnInit , AfterViewInit} from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';
import { Comments } from '../classes/comments';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
  public comments: Comments[];
  constructor(private services: PostService) {
    this.comments = [];
  }
  submit(form: NgForm) {
    console.warn(form.value);
}

  ngOnInit() {
    this.services.getPosts()
    .subscribe(response => {
      this.comments = response;
      console.log(response);
      console.log(this.comments);
    }
    );
  }
}
