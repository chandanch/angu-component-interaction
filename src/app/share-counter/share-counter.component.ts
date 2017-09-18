import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-share-counter',
  templateUrl: './share-counter.component.html',
  styleUrls: ['./share-counter.component.css']
})
export class ShareCounterComponent implements OnInit {

  @Output() onTagName = new EventEmitter<string>();
  shareCount: number;
  taggedNames: string[] = [];

  constructor() {
    this.shareCount = 0;
  }

  ngOnInit() {
  }

  increaseShareCount() {
    this.shareCount += 1;
  }

  tagName(name: string) {
    console.log(name);
    this.taggedNames.push(name);
    console.log(this.taggedNames);
  }

  getTagName(name: string) {
    this.onTagName.emit(name);
  }
}
