import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counterValue: number;

  constructor() {
    this.counterValue = 0;
  }

  ngOnInit() {
  }

  increaseCount() {
    this.counterValue += 1;
  }

  decreaseCount() {
     this.counterValue -= 1;
  }

  resetCount() {
    this.counterValue = 0;
  }

}
