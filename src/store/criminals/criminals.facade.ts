import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadCriminal } from "./criminals.action";
import { CriminalState } from './criminals.state';
import { selectCriminal } from './criminals.selectors';

@Injectable({ providedIn: 'root' })
export class CriminalFacade {
  public criminal$ = this.store.select(selectCriminal);

  constructor(private store: Store<CriminalState>) { }

  public loadCrim(): void {
    this.store.dispatch(loadCriminal())
  }

}
