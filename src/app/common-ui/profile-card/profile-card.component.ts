import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Profile} from 'src/app/data/interfaces/profile.interface';
import {ImgUrlPipe} from 'src/app/helpers/pipes/img-url.pipe';

@Component({
  selector: 'app-profile-card',
  imports: [
    NgOptimizedImage,
    ImgUrlPipe
  ],
  templateUrl: './profile-card.component.html',
  standalone: true,
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}
