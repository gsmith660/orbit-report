import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  // arrayOfTypes: string[];
  arrayOfUniqueTypes: string[];

  constructor() {
    // this.arrayOfTypes = this.satellites.map(sat => sat.type);
    // this.arrayOfUniqueTypes = [...new Set(this.satellites.map(sat => sat.type))];
    this.arrayOfUniqueTypes = [
      'Space Debris',
      'Communication',
      'Probe',
      'Positioning',
      'Space Station',
      'Telescope',
    ];
  }

  ngOnInit() {
  }

  getCountByType(type: string): number {
    return this.satellites.filter(sat => sat.type.toLowerCase() === type.toLowerCase()).length;
  }

}
