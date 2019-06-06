import { Injectable } from '@angular/core';
import { ICredentials } from "../models/credentials";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(credentials: ICredentials) {
    console.log(credentials);
  }
}
