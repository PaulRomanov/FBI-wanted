import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { User, Response } from './../interfaces/interfaces';
import { map, Observable, pipe } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(email: User, password: User): Observable<Response> {

    let userObj = {
      email: '',
      password: ''
    }

    let requestURL = '../../assets/users/users.json';

    return this.http.get<Response>(requestURL).pipe(

      map((data: any) => {
        const usersList = data["users"];

        usersList.find(
          ((usersElement: any) => {
            if (usersElement.email === email && usersElement.password === password) {
              userObj.email = usersElement.email
              userObj.password = usersElement.password

              localStorage.setItem('email', usersElement.email)

            } else {

            }
            return userObj;
          })
        )

        return usersList;
      })
    );

  }

}
