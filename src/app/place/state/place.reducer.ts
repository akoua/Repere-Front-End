import { Place } from "../../models/place.interface";
import { PlaceActions } from "./place.action";


export interface PlaceState {
    places: Place[];    
    requestDate: Date;
    errorMessage: string;
}

const initialState: PlaceState = {
    places: [],    
    requestDate: null,
    errorMessage: ''
}

export function reducer (state = initialState, action: PlaceActions.PlaceActionType) {
    switch (action.type) {
        case PlaceActions.PlaceAction.LoadSuccess:                                
            return {            
                ...state,
                places: action.payload,                
                requestedAt: new Date().toISOString()               
            }
        default:
            return state;
    }
}