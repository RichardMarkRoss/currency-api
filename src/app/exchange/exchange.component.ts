import { Component, OnInit , AfterViewInit} from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { PostService } from '../services/post.service';
import { Rates, Comments } from '../classes/comments';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
  public comments: Comment[] ;
  public rates: Rates[];
  constructor(private services: PostService) {
    this.comments = [];
    this.rates = [];
  }
  submit(form: NgForm) {
    console.warn(form.value);
}

  ngOnInit() {
    this.services.getPosts()
    .subscribe(response => {
     this.rates = response;
      console.log(response);
    }
    );
  }


}
