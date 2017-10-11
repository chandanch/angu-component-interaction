import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-setter-component',
  templateUrl: './setter-component.component.html',
  styleUrls: ['./setter-component.component.css']
})
export class SetterComponentComponent implements OnInit {

  private _name: string;

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  set name (name: string) {
    this._name = name;
  }

  get showName(): string {
    return this._name;
  }

}
