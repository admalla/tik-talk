import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileCardComponent} from 'src/app/common-ui/profile-card/profile-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCardComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
