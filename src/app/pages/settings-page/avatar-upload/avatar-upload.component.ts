import {Component, signal} from '@angular/core';
import {SvgIconComponent} from "src/app/common-ui/svg-icon/svg-icon.component";
import {DndDirective} from "src/app/common-ui/directives/dnd.directive";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-avatar-upload',
  imports: [
    SvgIconComponent,
    DndDirective,
    FormsModule
  ],
  templateUrl: './avatar-upload.component.html',
  standalone: true,
  styleUrl: './avatar-upload.component.scss'
})
export class AvatarUploadComponent {
  preview = signal('/assets/imgs/avatar.png')
  avatar: File | null = null;

  fileBrowserHandler(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0]
    this.processFile(file)
  }

  onFileDropped(file: File) {
    this.processFile(file)
  }

  processFile(file: File | null | undefined) {
    if (!file || !file.type.match('image')) return

    const render = new FileReader()

    render.onload = (event) => {
      this.preview.set(event.target?.result?.toString() || '')
    }

    render.readAsDataURL(file)
    this.avatar = file
  }
}
