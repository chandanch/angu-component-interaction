import { MissionService } from './service/mission.service';
import { ShareCounterComponent } from './share-counter/share-counter.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MissionService]
})
export class AppComponent {

  @ViewChild(ShareCounterComponent) shareCounter: ShareCounterComponent;

  title = 'app';
  private childInput: string;
  private voterList: string[];
  private agreed: number;
  private disagreed: number;
  private tagInput: string;
  private missionName: string;
  private launchedMissions: string[] = [];

  constructor(private missionService: MissionService) {
    this.voterList = ['Chandler', 'Ross', 'Celeste', 'Charlie'];
    this.agreed = 0;
    this.disagreed = 0;
    this.missionService.launchedMission$.subscribe(
      mission => {
        this.launchedMissions.push(mission);
      }
    );
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

  addMission(missionName: string) {
    console.log(`M ission Name`, this.missionName);
    this.missionService.announceMission(this.missionName);
  }
}
