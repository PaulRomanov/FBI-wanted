import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from 'rxjs';
import { FbiWantedAPIService } from './../../app/services/fbi-wanted-API.service';
import { loadCriminal, loadCriminalError, loadCriminalSuccess } from "./criminals.action";

@Injectable()
export class CriminalEffects {

  loadCriminals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCriminal),
      switchMap(({ page }) =>
        this.fbiWantedAPIService.searchFBIWanted(page)
      ),
      map((criminalsResponse) => loadCriminalSuccess({ response: criminalsResponse })),
      catchError((error: HttpErrorResponse) =>
        of(loadCriminalError({ error }))
      )
    )
  )

  constructor(
    private actions$: Actions,
    private fbiWantedAPIService: FbiWantedAPIService
  ) { }

}



