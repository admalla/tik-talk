import {Component, inject} from '@angular/core';
import {SvgIconComponent} from 'src/app/common-ui/svg-icon/svg-icon.component';
import {SubscriberCardComponent} from 'src/app/common-ui/side-bar/subscriber-card/subscriber-card.component';
import {RouterLink} from "@angular/router";
import {ProfileService} from "src/app/data/services/profile.service";
import {AsyncPipe} from "@angular/common";
import {firstValueFrom} from "rxjs";
import {ImgUrlPipe} from "src/app/helpers/pipes/img-url.pipe";

@Component({
  selector: 'app-side-bar',
  imports: [
    SvgIconComponent,
    SubscriberCardComponent,
    RouterLink,
    AsyncPipe,
    ImgUrlPipe
  ],
  templateUrl: './side-bar.component.html',
  standalone: true,
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  profileService = inject(ProfileService)
  subscribers$ = this.profileService.getSubscribersShortList()

  me = this.profileService.me

  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: '',
    },
    {
      label: 'Чаты',
      icon: 'chats',
      link: 'chats',
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: 'search',
    }
  ]

  ngOnInit(): void {
    firstValueFrom(this.profileService.getMe())
  }

}
