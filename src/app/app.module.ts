import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { SetterComponentComponent } from './setter-component/setter-component.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    SetterComponentComponent,
    VoteTakerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
