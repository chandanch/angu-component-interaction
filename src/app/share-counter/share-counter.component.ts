import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-share-counter',
  templateUrl: './share-counter.component.html',
  styleUrls: ['./share-counter.component.css']
})
export class ShareCounterComponent implements OnInit {

  @Output() onTagName = new EventEmitter<string>();
  @ViewChild('shareHeading') shareHead: ElementRef;
  shareCount: number;
  taggedNames: string[] = [];

  constructor() {
    this.shareCount = 0;
  }

  ngOnInit() {
    this.shareHead.nativeElement.style.color = 'blue';
  }

  increaseShareCount() {
    this.shareCount += 1;
    this.shareHead.nativeElement.style.color = 'orange';
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
