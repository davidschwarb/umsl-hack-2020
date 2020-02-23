import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
    specificCampusBuildings = [];
    firstBuilding: string;
    buildingObj;
    longName: string;
    arriveTime: string;
    timeSlotIndex: number;
    model = 1;
    records: any;
    lots: any;
    selectedLots: any;
    selectedLotsObject = [];

    constructor(private http: HttpClient, public router: Router) {
        this.http.get('https://umsl-hack-app.firebaseio.com/1/buildings.json')
            .subscribe(res => {
                this.records = res;
            });
        this.http.get('https://umsl-hack-app.firebaseio.com/0/lots.json')
            .subscribe(res => {
                this.lots = res;
            });
    }

    ngOnInit(): void {
    }

    handleCampusSelected(campus) {
        for (let i = 0; i < this.records.length; i++) {
            if (this.records[i].campus === campus) {
                this.specificCampusBuildings.push(this.records[i].acronym);
            }
        }
    }

    handleBuildingClick(building: string) {
        for (let i = 0; i < this.records.length; i++) {
            if (this.records[i].acronym === building) {
                this.buildingObj = this.records[i];
                this.longName = this.records[i].name;
            }
        }
        this.firstBuilding = building;
    }

    handleTimeClicked(time: string) {
        switch (time) {
            case 'Before 9:15':
                this.timeSlotIndex = (0);
                break;
            case '9:15 - 1:45':
                this.timeSlotIndex = (1);
                break;
            case '1:45 - 5:30':
                this.timeSlotIndex = (2);
                break;
            case 'After 5:30':
                this.timeSlotIndex = (3);
                break;
        }
        this.arriveTime = time;
    }

    handleSubmitClicked() {
        this.selectedLots = this.buildingObj.slots[this.timeSlotIndex].lots;
        for (let i = 0; i < this.lots.length; i++) {
            for (let j = 0; j < this.selectedLots.length; j++) {
                if (this.selectedLots[j] === this.lots[i].id) {
                    this.selectedLotsObject.push({lotName: this.lots[i].name, lat: this.lots[i].lat, long: this.lots[i].long});
                }
            }
        }
        localStorage.setItem('lotObj', JSON.stringify(this.selectedLotsObject));
        localStorage.setItem('submittedForm', 'yes');
        localStorage.setItem('building', this.firstBuilding);
        localStorage.setItem('timeSlot', this.timeSlotIndex.toString());
        this.router.navigate(['/lot-finder']);
    }
}
