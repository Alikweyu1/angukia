import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { MaterialModule } from './material/material.module';
import { MenubarComponent } from './menubar/menubar.component';
import {MatInputModule} from "@angular/material/input"
import {MatSelectModule} from "@angular/material/select"
import {MatAutocompleteModule} from "@angular/material/autocomplete"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatMenuModule} from "@angular/material/menu"
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button"
import {MatBadgeModule} from "@angular/material/badge"
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatListModule} from "@angular/material/list"
import {MatCardModule} from "@angular/material/card"
import {MatSliderModule} from "@angular/material/slider"
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatDatepickerModule} from "@angular/material/datepicker"
import {MatNativeDateModule} from "@angular/material/core"
import {MatRadioModule} from "@angular/material/radio"
import {MatCheckboxModule} from "@angular/material/checkbox"
import {MatDialogModule} from "@angular/material/dialog"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NgxCarouselModule } from 'ngx-carousel';
//import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './header/header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ExpiredSizePipe } from './expired-size.pipe';
import { ExpiredColorPipe } from './expired-color.pipe';
import { VgCoreModule } from 'ngx-videogular';
import{VgControlsModule} from 'ngx-videogular'
import { YouTubePlayerModule } from '@angular/youtube-player';
@NgModule({
  
  declarations: [
    AppComponent,
    InputComponent,
    MenubarComponent,
    HeaderComponent,
    CarouselComponent,
    NextDirective,
    PrevDirective,
    PageComponent,
    ExpiredSizePipe,
    ExpiredColorPipe,
    


  ],
  imports: [


    YouTubePlayerModule,
  MaterialModule,
  BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    NgxImageZoomModule,
    VgCoreModule,
    VgControlsModule
  ],
  providers: [
    { provide: CarouselConfig, useValue: { interval:80000, noPause: true, showIndicators: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
