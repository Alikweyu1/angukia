import { Component, AfterViewInit, ViewChild, ChangeDetectorRef, NgModule } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 8000, noPause: true, showIndicators: true } }
  ]
})
export class HeaderComponent implements AfterViewInit {
  sources: any = [];
  testmonials:any = [];
  isActiveSlide(slide: any): boolean {
    // Implement your logic to determine if the slide is active
    // You can compare the slide with a property or condition to determine its active state
    // For example, if there is an 'active' property on the slide object, you can do:
    return slide.active === true;
  }
   slides = [
    {
      image1: 'assets/images/image1.png',
      image2: 'assets/images/image2.png',
      image3: 'assets/images/test.png'
    },
    {
      image1: 'assets/images/image3.png',
      image2: 'assets/images/image4.png',
      image3: 'assets/images/image1.png'
    },
    {
      image1: 'assets/images/image7.png',
      image2: 'assets/images/image6.png',
      image3: 'assets/images/test1.png'
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
