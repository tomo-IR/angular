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
  visible = true;
  switch = 'one';

  data = ['1個目', '2個目', '3個目'];
  m = 'false, false, false';
  nowClass = { thin: false, large: false, frame: false };
  // message = 'ボタンをクリック';
  clickcount() {
    this.message = ++this.count + '回、クリックしました。';
  }
  doType(val: string) {
    this.input = val;
    this.message = 'you type:' + this.input;
  }
  doclick() {
    this.visible = !this.visible;
  }
  doSelect(v: any) {
    this.switch = v;
  }
  check(c1: any, c2: any, c3: any) {
    this.nowClass.thin = c1;
    this.nowClass.large = c2;
    this.nowClass.frame = c3;
    this.m = c1 + ',' + c2 + ',' + c3;
  }
}
