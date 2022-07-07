import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { Component, AfterViewInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor() {
  }
}

