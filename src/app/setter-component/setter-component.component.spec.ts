import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetterComponentComponent } from './setter-component.component';

describe('SetterComponentComponent', () => {
  let component: SetterComponentComponent;
  let fixture: ComponentFixture<SetterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
