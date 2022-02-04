import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { User, ResponseLogin } from './../interfaces/interfaces';
import { map, Observable, pipe } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) { }

  public userName: string | null = '';
  public isAuthLogin: boolean = false;

  public login(email: string, password: string): Observable<ResponseLogin> {

  public userObj = {
    email: '',
    password: ''
  }

    const requestURL = '../../assets/users/users.json';

    return this.http.get<ResponseLogin>(requestURL).pipe(

      map((data: any) => {
        const usersList = data["users"];

        usersList.find(
          ((usersElement: any) => {
            if (usersElement.email === email && usersElement.password === password) {
              this.userObj.email = usersElement.email
              this.userObj.password = usersElement.password

              localStorage.setItem('email', usersElement.email);
              localStorage.setItem('role', usersElement.role)

              this.isAuthLogin = true;
              this.userName = localStorage.getItem('role');
            }
            return this.userObj;
          })
        )

        return usersList;
      })
    );

  }

}


