import { MissionService } from './../service/mission.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit {

  private missionName = 'No mission announced';
  private missions: string[] = [];

  constructor(private missionService: MissionService) {
    this.missionService.missionAnnounced$.subscribe(
      mission => {
        this.missions.push(mission);
      }
    );
  }

  ngOnInit() {
  }

  launchMission(missionName: string) {
    console.log(`Launced Misssion: ${missionName}`);
    this.missionService.launchMission(missionName);
  }

}
