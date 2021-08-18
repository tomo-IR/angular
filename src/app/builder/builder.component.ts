import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css'],
})
export class BuilderComponent implements OnInit {
  title: string;
  message: string;
  text1: string;
  constructor() {
    this.title = 'Hello';
    this.message = 'NgModelを使う';
    this.text1 = 'hoge';
  }

  ngOnInit() {}
}
