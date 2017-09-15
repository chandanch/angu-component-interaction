import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private childInput: string;
  private voterList: string[];
  private agreed: number;
  private disagreed: number;

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
}
