import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  northCampusBuildings$: Observable<string[]>;
  arriveTime: string;
  timeSlotIndex: number;
  model = 1;
  constructor() { }

  ngOnInit(): void {
    this.northCampusBuildings$ = of([
        'AHB',
        'ESH',
        'CH'
    ]);
  }

  handleBuildingClick(building: string) {
      console.log(building);
  }

  handleTimeClicked(time: string) {
      switch (time) {
          case 'Before 9:15': this.timeSlotIndex = (0); break;
          case '9:15 - 1:45': this.timeSlotIndex = (1); break;
          case '1:45 - 5:30': this.timeSlotIndex = (2); break;
          case 'After 5:30': this.timeSlotIndex = (3); break;
      }
      console.log(time, this.timeSlotIndex);
      this.arriveTime = time;
  }
}
