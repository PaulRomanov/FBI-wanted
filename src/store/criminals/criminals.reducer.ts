import { createReducer, on } from "@ngrx/store";
import { loadCriminalSuccess } from "./criminals.action";
import { CriminalState } from "./criminals.state";

const initialState: CriminalState = { criminals: [], page: 0, total: 0 };

export const criminalReducer = createReducer(
  initialState,
  on(loadCriminalSuccess, (state, { response }) => ({
    ...state,
    criminals: response.items, page: response.page, total: response.total
  }))
);
