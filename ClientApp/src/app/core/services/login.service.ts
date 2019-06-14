import { Injectable } from '@angular/core';
import { ICredentials } from "../models/credentials";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from "../models/user";
import { UserStore } from "../store/user.store";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private userStore: UserStore) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.userStore.setUser(JSON.parse(localStorage.getItem('currentUser')));
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  private api: string = "http://localhost:5000/api/Account";

  login(credentials: ICredentials) {
    return this.http.post<any>(this.api + "/authenticate", credentials)
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          this.userStore.setUser(user);
        }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.userStore.setUser(null);
  }

  getUser() {
    return this.userStore.state$;
  }
}
