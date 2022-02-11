import { CriminalState } from './criminals/criminals.state';
import { criminalReducer } from './criminals/criminals.reducer';

export interface AppState {
  criminals: CriminalState;
}

//нужно типизировать appReducers: ...<AppState>
export const appReducers = {
  criminals: criminalReducer
}
