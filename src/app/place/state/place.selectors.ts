import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PlaceState } from "./place.reducer";

//les selctors nous permettent de rendre un couplage moins fort entre les differents composants 

//nous allons créer les differents selectors
export const getPlaceState = createFeatureSelector<PlaceState>('placeStore');

//des selectors bien precis maintenant
export const getAllPlaces = createSelector(getPlaceState, data => data.places);
export const getRequesTimeDate = createSelector(getPlaceState, data => data.requestDate);
//export const getDomainePlace = createSelector(getPlaceState, data => data.domaine);