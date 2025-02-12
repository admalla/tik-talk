import {Component} from '@angular/core';
import {SideBarComponent} from 'src/app/common-ui/side-bar/side-bar.component';
import {RouterOutlet} from '@angular/router';

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
}
