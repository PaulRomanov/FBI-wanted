import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CriminalState } from "./criminals.state";

const criminalFeatureSelector = createFeatureSelector<CriminalState>('criminals');
export const selectCriminal = createSelector(criminalFeatureSelector, (state)=>state.criminals)
