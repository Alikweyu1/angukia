import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }
  ]
})
export class CarouselComponent {
  slide = [
    { image: 'assets/images/image1.png' },
  { image: 'assets/images/image2.png' },
  { image: 'assets/images/image3.png' }
  ];
}
