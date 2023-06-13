import { Component, AfterViewInit, ViewChild, ChangeDetectorRef, NgModule } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';
import { trigger,transition,style,animate } from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }
  ],
animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms', style({ transform: 'translateX(0)' }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class HeaderComponent implements AfterViewInit {
  sources: any = [];
  testmonials:any = [];
  isActiveSlide(slide: any): boolean {
    return slide.active === true;
  }
   slides = [
    {
      image1: 'assets/images/tv1.png',
      image2: 'assets/images/image2.png',
      image3: 'assets/images/ps41.png',
      image4: 'assets/images/camera1.png',
      image5: 'assets/images/image4.png',
    },
    {
      image1: 'assets/images/image3.png',
      image2: 'assets/images/image8.png',
      image3: 'assets/images/image1.png',
      image4: 'assets/images/tv1.png',
      image5: 'assets/images/camera2.png',
    },
    {
      image1: 'assets/images/image7.png',
      image2: 'assets/images/test.png',
      image3: 'assets/images/camera2.png',
      image4: 'assets/images/camera1.png',
      image5: 'assets/images/image4.png',
    },
    // Add more slides as needed
  ];
 
  selectedTestmoniall: string="There are Testimonials from won packages";
  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  
  constructor(private observer:BreakpointObserver,private cd:ChangeDetectorRef){

  }
  @NgModule({
    imports: [CarouselModule.forRoot(), /* other modules */],
    // ...
  })
  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe(['(max-width:800px)'])
    .subscribe((res)=>{
      if (res?.matches){
        this.sideNav.mode = "push";
        this.sideNav.close();
      }else{
        this.sideNav.mode = 'side';
        this.sideNav.open();
      }
    })
    this.cd.detectChanges();
  }
  
}
