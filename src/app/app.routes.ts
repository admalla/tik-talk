import { Routes } from '@angular/router';
import {SearchPageComponent} from 'src/app/pages/search-page/search-page.component';
import {LoginPageComponent} from 'src/app/pages/login-page/login-page.component';
import {ProfilePageComponent} from 'src/app/pages/profile-page/profile-page.component';
import {LayoutComponent} from 'src/app/common-ui/layout/layout.component';
import {canActivateAuth} from 'src/app/auth/access.guard';
import {SettingsPageComponent} from "src/app/pages/settings-page/settings-page.component";

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: 'profile/me', pathMatch: "full"},
      {path: 'search', component: SearchPageComponent},
      {path: 'profile/:id', component: ProfilePageComponent},
      {path: 'settings', component: SettingsPageComponent},
    ],
    canActivate: [canActivateAuth]
  },
  {path: 'login', component: LoginPageComponent},
];
