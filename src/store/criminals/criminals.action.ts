import { createAction, props } from '@ngrx/store';
import { Criminal } from 'src/app/interfaces/interfaces';

export enum CRIMINAL_ACTION {
LOAD_CRIMINAL = '[CRIMINAL]',
LOAD_CRIMINAL_SUCCESS = '[CRIMINAL] load criminal success',
LOAD_CRIMINAL_ERROR = '[CRIMINAL] load criminal failure'
}

export const loadCriminal = createAction(CRIMINAL_ACTION.LOAD_CRIMINAL);
export const loadCriminalSuccess = createAction(
  CRIMINAL_ACTION.LOAD_CRIMINAL_SUCCESS,
  props<{criminals: Criminal []}>()
  );
