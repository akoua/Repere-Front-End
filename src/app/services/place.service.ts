
import { Injectable } from '@angular/core';import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { Place } from '../models/place.interface';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private domaine: string[];
  constructor(private http: HttpClient) { }

  getStore(data: Place): Observable<Place[]> {    
    console.log('data', data.domaine);
    return this.http.get<Place[]>('../../assets/data/database.json' )
            .pipe(                            
              tap(res => console.log('avant filter',res)), 
              map(val => val.filter( evt => evt.domaine === data.domaine) )  ,                              
              tap(res => console.log('Après filter', res)),                                       
            )          
  }

  getStoreR(): Observable<Place[]> {    
    //console.log('data', data['domaine']);
    return this.http.get<Place[]>('../../assets/data/database.json' )
            .pipe(                            
              tap(res => console.log('avant filter',res)), 
              map(val => val.filter( evt => evt.domaine === 'Informatique') )  ,                              
              tap(res => console.log('Après filter', res)),                                       
            )          
  }
 
}
