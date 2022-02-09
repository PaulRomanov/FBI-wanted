import { createReducer, on } from "@ngrx/store";
import { loadCriminalSuccess } from "./criminals.action";

const initialState = { criminals: [] };

export const criminalReducer = createReducer(
  initialState,
  on(loadCriminalSuccess, (state, { criminals }) => ({
    ...state,
    criminals
  }))
);
