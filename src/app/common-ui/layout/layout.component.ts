import {Component, inject} from '@angular/core';
import {SideBarComponent} from 'src/app/common-ui/side-bar/side-bar.component';
import {RouterOutlet} from '@angular/router';
import {ProfileService} from 'src/app/data/services/profile.service';

@Component({
  selector: 'app-layout',
  imports: [
    SideBarComponent,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  standalone: true,
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  profileService = inject(ProfileService)

  ngOnInit() {
    this.profileService.getMe().subscribe(value => {
      console.log(value)

    })
  }
}
