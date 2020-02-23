import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public schoolName = 'UMSL';
  public lotObj = [];
  public lotNames = [
    'Lot A',
    'Lot B',
    'Lot C'
  ];
  public selectedLot;

  constructor() { }

  ngOnInit(): void {
    this.lotObj = JSON.parse(localStorage.getItem('lotObj'));
    console.log(this.lotObj);
  }


}
