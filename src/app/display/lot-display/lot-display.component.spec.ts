import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotDisplayComponent } from './lot-display.component';

describe('LotDisplayComponent', () => {
  let component: LotDisplayComponent;
  let fixture: ComponentFixture<LotDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
