import {inject, Injectable, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from 'src/app/data/interfaces/profile.interface';
import {map, Observable, take, tap} from "rxjs";
import {Pageble} from "src/app/data/interfaces/pageble.interface";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient)

  baseApiUrl = 'https://icherniakov.ru/yt-course/'

  me = signal<Profile | null>(null)

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`)
  }

  getAccount(id: string){
    return this.http.get<Profile>(`${this.baseApiUrl}account/${id}`)
  }

  getMe() {
    return this.http.get<Profile>(`${this.baseApiUrl}account/me`)
      .pipe(
        tap(res => this.me.set(res))
      )
  }

  patchProfile(profile: Partial<Profile>) {
    return this.http.patch<Profile>(`${this.baseApiUrl}account/me`, profile)
  }

  getSubscribersShortList(subsAmount = 3) {
    return this.http.get<Pageble<Profile>>(`${this.baseApiUrl}account/subscribers/`)
      .pipe(
        map(res => res.items.slice(0, subsAmount))
      )
  }
}
