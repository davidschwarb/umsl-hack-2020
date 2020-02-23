import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheerioComponent } from './cheerio.component';

describe('CheerioComponent', () => {
  let component: CheerioComponent;
  let fixture: ComponentFixture<CheerioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheerioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheerioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
