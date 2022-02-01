import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { User, Response } from './../interfaces/interfaces';
import { map, Observable, pipe } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) { }

  public userName: string | null = '';
  public isAuthLogin: boolean = false;
  public login(email: User, password: User): Observable<Response> {

    const userObj = {
      email: '',
      password: ''
    }

    const requestURL = '../../assets/users/users.json';

    return this.http.get<Response>(requestURL).pipe(

      map((data: any) => {
        const usersList = data["users"];

        usersList.find(
          ((usersElement: any) => {
            if (usersElement.email === email && usersElement.password === password) {
              userObj.email = usersElement.email
              userObj.password = usersElement.password

              localStorage.setItem('email', usersElement.email);
              localStorage.setItem('role', usersElement.role)

              this.userName = localStorage.getItem('role');
              this.isAuthLogin = true;

            }
            return userObj;
          })
        )

        return usersList;
      })
    );

  }

}


