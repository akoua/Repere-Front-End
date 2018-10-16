import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Place } from '../../models/place.interface';
import { PlaceService } from '../../services/place.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAllPlaces, getRequesTimeDate} from '../state/place.selectors';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PlaceDialogComponent } from '../place-dialog/place-dialog.component';

@Component({
  selector: 'cc-place-dashboard',
  templateUrl: './place-dashboard.component.html',
  styleUrls: ['./place-dashboard.component.css']
})
export class PlaceDashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  @Input() domaine: string;
  places$: Observable<Place[]>;
  dateTime$: Observable<Date>;  

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      //console.log('Appeler', this.x++ );
      //this.places$.subscribe(data => this.domaine = data[0].domaine);       
      if (matches) {     
        return [
          { title: this.domaine, cols: 1, rows: 1 }
        ];
      }
          
      return [
        { title: this.domaine, cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
     private store: Store<any>,
     public dialog: MatDialog) { }

  ngOnInit(): void {       
    this.places$ = this.store.select(getAllPlaces);
    this.dateTime$ = this.store.select(getRequesTimeDate);     
  }


  viewCarte() {
    const dialogRef = this.dialog.open(PlaceDialogComponent, {
      height: '400px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  passCommand() {

  }
}


