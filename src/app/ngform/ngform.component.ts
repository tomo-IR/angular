import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css'],
})
export class NgformComponent implements OnInit {
  title: number;
  message: string;
  constructor() {}

  ngOnInit() {
    this.title = 123;
    this.message = 'メッセージ';
  }
  onSubmit(val: any) {
    this.message = JSON.stringify(val);
  }
}
