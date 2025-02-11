import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenResponse} from 'src/app/auth/auth.interface';
import {catchError, tap, throwError} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  cookieService = inject(CookieService)
  router = inject(Router)

  token: string | null = null;
  refreshToken: string | null = null;

  get isAuth() {
    if(!this.token){
      this.token = this.cookieService.get('token')
      this.refreshToken = this.cookieService.get('refreshToken')
    }
    return !!this.token;
  }

  baseApiUrl = 'https://icherniakov.ru/yt-course/auth/'

  login(payload: {username: string, password: string}) {
    const fd = new FormData();
    fd.append('username', payload.username);
    fd.append('password', payload.password);

    return this.http.post<TokenResponse>(`${this.baseApiUrl}token`, fd).pipe(
      tap(value => this.saveToken(value))
    )
  }

  refreshAuthToken() {
    return this.http.post<TokenResponse>(
      `${this.baseApiUrl}refresh`,
      {refresh_token: this.refreshToken},
    ).pipe(
      tap(value => this.saveToken(value)),
      catchError(err => {
        this.cookieService.deleteAll()
        this.token = null
        this.refreshToken = null
        this.router.navigate(['/login'])

        return throwError(err)
      })
    )
  }

  saveToken(value: TokenResponse) {
    this.token = value.access_token
    this.refreshToken = value.refresh_token

    this.cookieService.set('token', value.access_token)
    this.cookieService.set('refreshToken', value.refresh_token)
  }

}


