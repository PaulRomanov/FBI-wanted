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

              this.isAuthLogin = true;

              if (localStorage.getItem('email') === 'admin@gmail.com') {
                this.userName = 'Admin'
              } else if (localStorage.getItem('email') === 'user@gmail.com') {
                this.userName = 'User'
              } else if (localStorage.getItem('email') === 'guest@gmail.com') {
                this.userName = 'Guest'
              } else {
                this.userName = localStorage.getItem('email')
              }


            } else {

            }

            // for (let i = 0; i < usersList.length; i++) {
            //   if (usersList[i].email === usersElement.email && usersElement.password === password) {
            //     userObj.email = usersElement.email
            //     userObj.password = usersElement.password

            //     console.log(usersList[i].email);
            //     console.log('userObj.email', userObj.email);



            //     localStorage.setItem('email', usersElement.email)
            //     // console.log(localStorage.getItem('email'));

            //     this.isAuthLogin = true;

            //     if (localStorage.getItem('email') === 'admin@gmail.com') {
            //       this.userName = 'Admin'
            //     } else if (localStorage.getItem('email') === 'user@gmail.com') {
            //       this.userName = 'User'
            //     } else if (localStorage.getItem('email') === 'guest@gmail.com') {
            //       this.userName = 'Guest'
            //     } else {
            //       this.userName = localStorage.getItem('email')
            //     }


            //   } else {

            //   }
            // }


            return userObj;
          })
        )

        return usersList;
      })
    );

  }

}


