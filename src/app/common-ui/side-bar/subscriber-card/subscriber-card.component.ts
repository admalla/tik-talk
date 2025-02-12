import {Component, Input} from '@angular/core';
import {Profile} from 'src/app/data/interfaces/profile.interface';
import {ImgUrlPipe} from 'src/app/helpers/pipes/img-url.pipe';
import {RouterLink} from "@angular/router";
import {SvgIconComponent} from "src/app/common-ui/svg-icon/svg-icon.component";

@Component({
  selector: 'app-subscriber-card',
  imports: [
    ImgUrlPipe,
    RouterLink,
    SvgIconComponent
  ],
  templateUrl: './subscriber-card.component.html',
  standalone: true,
  styleUrl: './subscriber-card.component.scss'
})
export class SubscriberCardComponent {
  @Input() profile!: Profile;

}
