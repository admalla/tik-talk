import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'imgUrl'
})
export class ImgUrlPipe implements PipeTransform {

  transform(value: string): string{
    if(!value) return '';
    return `https://icherniakov.ru/yt-course/${value}`
  }
}
