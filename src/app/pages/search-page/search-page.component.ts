import {Component, inject} from '@angular/core';
import {ProfileService} from 'src/app/data/services/profile.service';
import {Profile} from 'src/app/data/interfaces/profile.interface';
import {ProfileCardComponent} from 'src/app/common-ui/profile-card/profile-card.component';
import {ProfileFiltersComponent} from "src/app/pages/search-page/profile-filters/profile-filters.component";

@Component({
  selector: 'app-search-page',
  imports: [
    ProfileCardComponent,
    ProfileFiltersComponent
  ],
  templateUrl: './search-page.component.html',
  standalone: true,
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  profileService = inject(ProfileService)
  profiles = this.profileService.filteredProfiles

  constructor() {
    // this.profileService.getTestAccounts().subscribe(value => {
    //   this.profiles = value
    // })
  }
}
