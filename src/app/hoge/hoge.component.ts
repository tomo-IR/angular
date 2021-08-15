import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoge',
  templateUrl: './hoge.component.html',
  styleUrls: ['./hoge.component.css'],
  template: ` <p><{{ hog }}/p></p>`,
})
export class HogeComponent implements OnInit {
  // styleClass: string;
  constructor() {}
  ngOnInit() {}
  title = 'Hello App';
  input = '';
  message = 'please type';
  hog = 0;
  today = '今日';
  styleClass = 'red';
  count = 0;
  // message = 'ボタンをクリック';
  clickcount() {
    this.message = ++this.count + '回、クリックしました。';
  }
  doType(val: string) {
    this.input = val;
    this.message = 'you type:' + this.input;
  }
}
