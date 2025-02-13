import { Component } from '@angular/core';
import {PostComponent} from "src/app/pages/profile-page/post/post.component";
import {PostInputComponent} from "src/app/pages/profile-page/post-input/post-input.component";

@Component({
  selector: 'app-post-feed',
  imports: [
    PostComponent,
    PostInputComponent
  ],
  templateUrl: './post-feed.component.html',
  standalone: true,
  styleUrl: './post-feed.component.scss'
})
export class PostFeedComponent {

}
