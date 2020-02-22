import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lot-display',
  templateUrl: './lot-display.component.html',
  styleUrls: ['./lot-display.component.css']
})
export class LotDisplayComponent implements OnInit {
  @Input() lotName;
  constructor() {
    console.log(this.lotName);
  }

  ngOnInit(): void {
  }

  lotClickHandler() {
      window.location.href = `https://www.google.com/maps/place/UMSL+Parking+${this.lotName}`;
  }
}
