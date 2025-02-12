import {Component, input} from '@angular/core';
import {Profile} from "src/app/data/interfaces/profile.interface";
import {ImgUrlPipe} from "src/app/helpers/pipes/img-url.pipe";

@Component({
  selector: 'app-profile-header',
  imports: [
    ImgUrlPipe
  ],
  templateUrl: './profile-header.component.html',
  standalone: true,
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
  profile = input<Profile>()
}
