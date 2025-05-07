import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { UserStore } from '../storage/user-store';
import { CredentialsModel } from '../models/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userStore = inject(UserStore)

  constructor(private http: HttpClient) { 
    const token = localStorage.getItem("token");
    if(!token) return;
    const container = jwtDecode<{ user: UserModel }>(token);
    const dbUser = container.user;
    this.userStore.initUser(dbUser);
  }

  public async register(user: UserModel){
    const observable = this.http.post<string>(environment.registerUrl, user);
    const token = await firstValueFrom(observable);
    const container = jwtDecode<{ user: UserModel }>(token);
    const dbUser = container.user;
    this.userStore.initUser(dbUser);
    localStorage.setItem("token", token);

  }

  public async login(credentials: CredentialsModel) {
    const observable = this.http.post<string>(environment.loginUrl, credentials);
    const token = await firstValueFrom(observable);
    const container = jwtDecode<{ user: UserModel }>(token);
    const dbUser = container.user;
    this.userStore.initUser(dbUser);
    localStorage.setItem("token", token);
}

public logout() {
  this.userStore.logoutUser();
  localStorage.removeItem("token");
}


}
