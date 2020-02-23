import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBlurbComponent } from './event-blurb.component';

describe('EventBlurbComponent', () => {
  let component: EventBlurbComponent;
  let fixture: ComponentFixture<EventBlurbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBlurbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
