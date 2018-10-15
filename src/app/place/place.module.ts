import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LayoutModule } from '@angular/cdk/layout';
import { PlaceDashboardComponent } from './place-dashboard/place-dashboard.component';
import { PlaceFindComponent } from './place-find/place-find.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from "ngx-pagination";

//Ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './state/place.reducer';
import { PlaceEffect } from './state/place.effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    StoreModule.forFeature('placeStore', reducer),
    EffectsModule.forFeature([PlaceEffect])
  ],
  declarations: [PlaceDashboardComponent, PlaceFindComponent],
  exports: [PlaceDashboardComponent, PlaceFindComponent]  
})
export class PlaceModule { }
