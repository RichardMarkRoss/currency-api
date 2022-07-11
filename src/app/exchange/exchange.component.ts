import { Component, OnInit , AfterViewInit} from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { PostService } from '../services/post.service';
import { Rates, Comments } from '../classes/comments';

class RateModel {
  rates: [] = [] ;
}
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
  comments: Comment[];
  rates: Rates[];
  constructor(private services: PostService) {
    this.comments =[];
    this.rates =[];
  }
  submit(form: NgForm) {
    console.warn(form.value);
}

  ngOnInit() {
    this.services.getPosts()
    .subscribe((response) => {
      let ratesModel = new RateModel();
      ratesModel = JSON.parse(JSON.stringify(response));
      this.rates = ratesModel.rates;
    }
    );
  }


}
