import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CriminalState } from "./criminals.state";

const criminalFeatureSelector = createFeatureSelector<CriminalState>('criminal');
export const selectCriminal = createSelector(criminalFeatureSelector, (state)=>state.criminals)
