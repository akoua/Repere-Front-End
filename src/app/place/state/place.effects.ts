import { Injectable } from "@angular/core";
import { PlaceService } from "../../services/place.service";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { PlaceActions } from "../state/place.action";
import { mergeMap, map } from "rxjs/operators";
import { PlaceFindComponent } from "../place-find/place-find.component";


@Injectable()
export class PlaceEffect {
    constructor(private placeService: PlaceService, private action$: Actions) {}

    //implementation de l'effect
    @Effect()
    placeAction$ : Observable<PlaceActions.PlaceActionType> = this.action$.pipe(
        //precisons l'action qui nous interesse
        ofType(PlaceActions.PlaceAction.Load),
        mergeMap( action => {            
            console.log("action après filtrage", action['payload']);
            return this.placeService.getStore(action['payload']).pipe(
                map(places => {
                    console.log("places from Effect()", places);
                    return new PlaceActions.LoadSuccessClass(places) //le payload represente la collection de repos
                })
            )
        })
    )
}