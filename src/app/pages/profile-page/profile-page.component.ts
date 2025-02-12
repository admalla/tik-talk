import {Component, inject} from '@angular/core';
import {ProfileHeaderComponent} from "src/app/common-ui/profile-header/profile-header.component";
import {ProfileService} from "src/app/data/services/profile.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {switchMap} from "rxjs";
import {toObservable} from "@angular/core/rxjs-interop";
import {AsyncPipe} from "@angular/common";
import {SvgIconComponent} from "src/app/common-ui/svg-icon/svg-icon.component";

@Component({
  selector: 'app-profile-page',
  imports: [
    ProfileHeaderComponent,
    AsyncPipe,
    RouterLink,
    SvgIconComponent
  ],
  templateUrl: './profile-page.component.html',
  standalone: true,
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {
  profileService = inject(ProfileService)
  route = inject(ActivatedRoute)
  me$ = toObservable(this.profileService.me)

  profile$ = this.route.params
    .pipe(
      switchMap(({ id }) => {
        if (id === 'me') {
          return this.me$
        }

        return this.profileService.getAccount(id)
      })
    )
}
