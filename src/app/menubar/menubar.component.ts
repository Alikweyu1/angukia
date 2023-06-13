import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
  
})
export class MenubarComponent  {
  @ViewChild(MatSidenav) sideNave!: MatSidenav;
  constructor(private observer : BreakpointObserver, private cd : ChangeDetectorRef){

  }
  
}
