import { Action } from "@ngrx/store";
import { Place } from "../../models/place.interface";

//cela nous permet d'exporter tout le contenu en se basant sur le namespace seulement
export namespace PlaceActions {

    export enum PlaceAction {
        Load = "[Place] Load",
        LoadSuccess = "[Place] LoadSuccess"
    }
    
    //Actions creator
    export class LoadClass implements Action {
        type= PlaceAction.Load;
        constructor(public payload:any) {}
    }
    
    export class LoadSuccessClass implements Action {
        type= PlaceAction.LoadSuccess;    
        constructor(public payload: Place[]) {}
    }
    
    export type PlaceActionType = LoadClass | LoadSuccessClass ;
}