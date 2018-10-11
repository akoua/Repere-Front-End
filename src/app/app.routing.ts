import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 import { PlaceDashboardComponent } from "./place/place-dashboard/place-dashboard.component";
 import { PlaceFindComponent } from "./place/place-find/place-find.component";
 
 
 const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'findPlace' },
   {path:'findPlace', component: PlaceFindComponent},   
 ];
 
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }
 
 export const routingComponents = [PlaceDashboardComponent, PlaceFindComponent];