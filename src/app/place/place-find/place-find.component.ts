import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { PlaceService } from '../../services/place.service';
import { Place } from '../../models/place.interface';
import { Store } from '@ngrx/store';
import { PlaceActions } from '../state/place.action';
import { getAllPlaces, getRequesTimeDate } from '../state/place.selectors';

@Component({
  selector: 'app-place-find',
  templateUrl: './place-find.component.html',
  styleUrls: ['./place-find.component.css']
})
export class PlaceFindComponent implements OnInit {

  private isSearch: boolean = false;
  private term: string;
  formFindPlace: FormGroup;
  domaine: string;

  domaines = [
    {id:1, name:'Informatique', value:'Informatique'},
    {id:2, name:'restauration', value:'restauration'}
  ];
  villes: any[] = [
    {id:1, name:'Abidjan', value:'Abidjan'},
    {id:2, name:'Yamoussoukro', value:'Yakro'},
    {id:3, name:'Bouaké', value:'Bouaké'}    
  ];

  villesOptions$ : Observable<any>;
  
  constructor(private formBuilder: FormBuilder, private store: Store<any>) { }

  ngOnInit() {
    this.createForm();
    this.villesOptions$ = this.formFindPlace.controls.positionGeo.valueChanges
                          .pipe(
                            startWith(''),
                            map(value => this._filter(value))
                          );
  }

  createForm(){
   this.formFindPlace = this.formBuilder.group({
      term: ['', Validators.required],
      domaine: ['', Validators.required], 
      positionGeo: ['', Validators.required],
      positionAccept: false
    });
  }

  validerPlace(formData){
    //this.term = formData.controls.term.toLowerCase();
    console.log('form', formData);  
    this.store.dispatch(new PlaceActions.LoadClass(formData));
    this.isSearch = true;
    this.domaine = formData.domaine;    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.villes.filter(option => option.name.toLowerCase().startsWith(filterValue));
  }

  private positionValid(){
    console.log(this.formFindPlace.controls.positionAccept);
  }

}
