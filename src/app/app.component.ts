import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
//import { NewsService } from './services/news.service';
export interface IMedia {
  title: string;
  src: string;
  type: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {

    playlist: Array<IMedia> = [
        {
            title: 'Pale Blue Dot',
            src: 'http://static.videogular.com/assets/videos/videogular.mp4',
            type: 'video/mp4'
        },
        {
            title: 'Big Buck Bunny',
            src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
            type: 'video/mp4'
        },
        {
            title: 'Elephants Dream',
            src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
            type: 'video/mp4'
        }
    ];
    currentIndex = 0;
    currentItem: IMedia = this.playlist[ this.currentIndex ];
 
    onClickPlaylistItem(item: IMedia) {
        
    }
  constructor(){

  }
 
  
  title = 'website';
  //carouselItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  
  
}
