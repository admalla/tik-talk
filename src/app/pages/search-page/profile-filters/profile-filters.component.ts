import {Component, inject} from '@angular/core';
import {AvatarUploadComponent} from "src/app/pages/settings-page/avatar-upload/avatar-upload.component";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {debounceTime, startWith, switchMap} from "rxjs";
import {ProfileService} from "src/app/data/services/profile.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-profile-filters',
  imports: [
    AvatarUploadComponent,
    ReactiveFormsModule
  ],
  templateUrl: './profile-filters.component.html',
  standalone: true,
  styleUrl: './profile-filters.component.scss'
})
export class ProfileFiltersComponent {
  fb = inject(FormBuilder);
  profileService = inject(ProfileService)
  searchForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    stack: [''],
  })

  constructor() {
    this.searchForm.valueChanges.pipe(
      startWith({}),
      debounceTime(300),
      switchMap(formValue => {
        return this.profileService.filterProfile(formValue)
      }),
      takeUntilDestroyed(),
    ).subscribe()
  }
}
