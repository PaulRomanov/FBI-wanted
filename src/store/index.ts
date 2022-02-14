import { CriminalState } from './criminals/criminals.state';
import { criminalReducer } from './criminals/criminals.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  criminals: CriminalState;
}

export const appReducers: ActionReducerMap<AppState> = {
  criminals: criminalReducer
}
