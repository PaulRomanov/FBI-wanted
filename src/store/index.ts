import { CriminalState } from './criminals/criminals.state';
import { criminalReducer } from './criminals/criminals.reducer';

export interface AppState {
  criminal: CriminalState;
}

//нужно типизировать appReducers: ...<AppState>
export const appReducers = {
  criminal: criminalReducer
}
