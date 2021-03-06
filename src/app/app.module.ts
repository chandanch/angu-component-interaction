import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { SetterComponentComponent } from './setter-component/setter-component.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { CounterComponent } from './counter/counter.component';
import { ShareCounterComponent } from './share-counter/share-counter.component';
import { MissionDetailsComponent } from './mission-details/mission-details.component';
import { SelectorComponent } from './selector/selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    SetterComponentComponent,
    VoteTakerComponent,
    CounterComponent,
    ShareCounterComponent,
    MissionDetailsComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
