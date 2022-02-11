import { Criminal } from "src/app/interfaces/interfaces";

export interface CriminalState {
  criminals: Criminal [];
  page: number;
  total: number;
}
