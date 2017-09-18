import { ShareCounterComponent } from './share-counter/share-counter.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(ShareCounterComponent) shareCounter: ShareCounterComponent;

  title = 'app';
  private childInput: string;
  private voterList: string[];
  private agreed: number;
  private disagreed: number;
  private tagInput: string;

  constructor() {
    this.voterList = ['Chandler', 'Ross', 'Celeste', 'Charlie'];
    this.agreed = 0;
    this.disagreed = 0;
  }

  getInput() {
    console.log(this.childInput);
  }

  onVoted(vote: boolean) {
    vote ? this.agreed++ : this.disagreed++;
  }

  share() {
    this.shareCounter.increaseShareCount();
    this.shareCounter.tagName(this.tagInput);
  }

  showTagName(name: string) {
    alert(`Tag name: ${name}`);
  }
}
