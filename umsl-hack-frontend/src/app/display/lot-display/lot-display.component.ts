import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lot-display',
  templateUrl: './lot-display.component.html',
  styleUrls: ['./lot-display.component.css']
})
export class LotDisplayComponent implements OnInit {
  @Input() lotDetails: any;

  constructor() {
  }

  ngOnInit(): void {

  }

  lotClickHandler() {
      window.open(`https://www.google.com/maps/place/@${this.lotDetails.lat},${this.lotDetails.long},18z`);
  }
}
