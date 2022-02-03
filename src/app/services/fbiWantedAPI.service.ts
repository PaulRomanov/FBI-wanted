import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { ResponseApi } from './../interfaces/interfaces';

@Injectable({ providedIn: 'root' })
export class FbiWantedAPIService {

  public userName: string = '';

  constructor(
    private httpClient: HttpClient
  ) { }

  public searchFBIWanted() {

    const requestURL = 'https://api.fbi.gov/wanted/v1/list';

    return this.httpClient.get<ResponseApi>(requestURL)

  }

}


