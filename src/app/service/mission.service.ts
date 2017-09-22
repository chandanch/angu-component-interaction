import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MissionService {

  // Observable string source
  private missonSource = new Subject<string>();
  private launchedMissionSource = new Subject<string>();

  // Observable string stream
  missionAnnounced$ = this.missonSource.asObservable();
  launchedMission$ = this.launchedMissionSource.asObservable();

  constructor() {
  }

  announceMission(mission: string) {
    this.missonSource.next(mission);
  }

  launchMission(mission: string) {
    this.launchedMissionSource.next(mission);
  }

}
