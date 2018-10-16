import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'cc-place-dialog',
  templateUrl: './place-dialog.component.html',
  styleUrls: ['./place-dialog.component.css']
})
export class PlaceDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PlaceDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close('je suis fermé');
  }
}
