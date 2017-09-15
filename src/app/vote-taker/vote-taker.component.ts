import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.css']
})
export class VoteTakerComponent  {

  private voted: boolean;
  @Input() voterName: string;
  @Output() onVoted =  new EventEmitter<boolean>();

  constructor() {
    this.voted = false;
  }

  /**
   * @desc makevote
   * @param vote
   */
  makeVote(vote: boolean) {
    this.voted = true;
    this.onVoted.emit(vote);
  }

}
