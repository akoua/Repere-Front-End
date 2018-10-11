import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Place } from '../../models/place.interface';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'cc-place-dashboard',
  templateUrl: './place-dashboard.component.html',
  styleUrls: ['./place-dashboard.component.css']
})
export class PlaceDashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  results : Place[];
  
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: this.results[0].domaine , cols: 1, rows: 1 }                
        ];
      }

      return [
        { title: this.results[0].domaine , cols: 1, rows: 1 }                
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private placeService: PlaceService) {}

  place: Place = {
    "id": 2,
    "name": "Bcc",
    "domaine": "Informatique",
    "position_geographique": "cocody"
}
  ngOnInit(): void {
    this.placeService.getStore(this.place)
                      .subscribe(data => this.results = data);    
  }
}
