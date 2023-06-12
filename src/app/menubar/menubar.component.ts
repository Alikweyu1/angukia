import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
  
})
export class MenubarComponent implements AfterViewInit {
  @ViewChild(MatSidenav) sideNave!: MatSidenav;
  constructor(private observer : BreakpointObserver, private cd : ChangeDetectorRef){

  }
  ngAfterViewInit(): void {
    this.sideNave.opened = true;
    this.observer.observe(['(max-width:800px)'])
    .subscribe((res)=>{
      if(res?.matches){
        this.sideNave.mode="over";
        this.sideNave.close();
      }else{
        this.sideNave.mode = 'side';
        this.sideNave.open();
      }
    })
    this.cd.detectChanges();
  }

  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
}
