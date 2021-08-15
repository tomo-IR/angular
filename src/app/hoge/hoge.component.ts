import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hoge',
  templateUrl: './hoge.component.html',
  styleUrls: ['./hoge.component.css'],
  template: ` <p><{{ hog }}/p></p>`,
})
export class HogeComponent implements OnInit {
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
  m = 'true, true, true';
  nowClass = { thin: true, large: true, frame: true };
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
  check(c1: boolean, c2: boolean, c3: boolean) {
    this.nowClass.thin = c1;
    this.nowClass.large = c2;
    this.nowClass.frame = c3;
    this.m = c1 + ',' + c2 + ',' + c3;
  }
  text1 = '';
  myControl = new FormControl('ok');
  me = '';
  doClick() {
    this.me = '「' + this.myControl.value + '」と書きましたね！';
  }
}
