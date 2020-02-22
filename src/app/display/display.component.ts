import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public schoolName = 'UMSL';
  public lotNames = [
    'Lot A',
    'Lot B',
    'Lot C'
  ];
  public selectedLot;

  constructor() { }

  ngOnInit(): void {
    this.lotNames = ['Lot X', 'Lot Y', 'Lot Z'];
  }


}
