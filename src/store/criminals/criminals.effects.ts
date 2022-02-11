import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, Observable, of, pipe, switchMap } from 'rxjs';
import { CriminalsRespons } from "src/app/interfaces/interfaces";
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


  // getUserInfo: Observable<Action> = createEffect(() =>
  //     this.actions.pipe(
  //       ofType(getUserInfo),
  //       switchMap(() =>
  //         this.userService.getUserInfo().pipe(
  //           map(data => getUserInfoSuccessful({ data }))
  //         ))
  //     )
  //   )



  // public searchFBIWanted(page: number): Observable<CriminalsRespons> {
  //   const requestURL = 'https://api.fbi.gov/wanted/v1/list';

  //     this.httpClient.get<CriminalsRespons>(requestURL, {
  //       params: {
  //         page,
  //       },
  //     });
  // }


}



