import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-blurb',
  templateUrl: './event-blurb.component.html',
  styleUrls: ['./event-blurb.component.css']
})
export class EventBlurbComponent implements OnInit {
  eventBlurbData: any;
  splitEvent;
  startTime;
  startTimeString;
  endTime;
  endTimeString;
  constructor() { }

  ngOnInit(): void {
    this.eventBlurbData = JSON.parse(localStorage.getItem('eventData'));
    this.splitEvent = this.eventBlurbData.eventStart.split(' ');
    console.log(this.splitEvent);
    this.startTime = this.splitEvent[4].split(':')[0];
    this.startTime = this.startTime - 6;
    console.log(this.startTime.valueOf());
    if (this.startTime.valueOf() >= 12) {
      this.startTimeString = this.startTime - 12 + ' PM';
    }
    this.startTimeString = this.splitEvent[0] + ' ' + this.splitEvent[2] + ' ' + this.splitEvent[1] + ': ' + this.startTimeString;
  }

}
