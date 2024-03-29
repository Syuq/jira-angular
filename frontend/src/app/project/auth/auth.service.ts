import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JUser } from '@syuq/interface/user';
import { of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { AuthStore } from './auth.store';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl: string;
  constructor(private _http: HttpClient, private _store: AuthStore) {
    this.baseUrl = environment.apiUrl;
  }

  login({ email = '', password = '' }: LoginPayload) {
    this._store.setLoading(true);
    this._http
      .post<JUser>(`${this.baseUrl}/auth`, {
        email,
        password
      })
      .pipe(
        map((user) => {
          this._store.update((state) => ({
            ...state,
            ...user
          }));
        }),
        finalize(() => {
          this._store.setLoading(false);
        }),
        catchError((err) => {
          this._store.setError(err);
          return of(err);
        })
      )
      .subscribe();
  }
}

export class LoginPayload {
  email: string;
  password: string;
  constructor() {
    this.email = 'syuq@gmail.com';
    this.password = `${new Date().getTime()}`;
  }
}
