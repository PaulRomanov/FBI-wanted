import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { CriminalsRespons } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FbiWantedAPIService {

  public userName: string = '';

  constructor(
    private httpClient: HttpClient
  ) { }

  public searchFBIWanted(page: number): Observable<CriminalsRespons> {

    const requestURL = 'https://api.fbi.gov/wanted/v1/list';

    return this.httpClient.get<CriminalsRespons>(requestURL, {
      params: {
        page,
      },
    });

  }
}


