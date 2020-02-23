import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  specificCampusBuildings = [];
  firstBuilding: string;
  longName: string;
  arriveTime: string;
  timeSlotIndex: number;
  model = 1;
  records: any;
  lots: any;

    constructor(private http: HttpClient) {
        this.http.get('https://umsl-hack-app.firebaseio.com/1/buildings.json')
            .subscribe(res => {
                this.records = res;
                console.log(this.records);
            });
        this.http.get('https://umsl-hack-app.firebaseio.com/0/lots.json')
            .subscribe(res => {
                this.lots = res;
                console.log(this.lots);
            });
    }

  ngOnInit(): void {
  }

  handleCampusSelected(campus) {
        console.log(campus);
        for (let i = 0; i < this.records.length; i++) {
            if (this.records[i].campus === campus) {
                this.specificCampusBuildings.push(this.records[i].acronym);
            }
        }
  }

  handleBuildingClick(building: string) {
     for (let i = 0; i < this.records.length; i++) {
        if (this.records[i].acronym === building) {
            this.longName = this.records[i].name;
        }
     }
     this.firstBuilding = building;
     console.log(this.firstBuilding);
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

  handleSubmitClicked() {
      localStorage.setItem('submittedForm', 'yes');
      localStorage.setItem('building', this.firstBuilding);
      localStorage.setItem('timeSlot', this.timeSlotIndex.toString());
      window.location.href = '/lot-finder';
  }
}
