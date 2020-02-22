import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() lot;
  private url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA3eNqLKDzmeAWVuFVzKL_7-qocMVRPn48&q=UMSL+Parking+${this.lot}`;
  public trustedUrl;

  constructor(private sanitizer: DomSanitizer) {
      this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.url);
  }

  ngOnInit(): void {
  }

}
