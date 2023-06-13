import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { interval } from 'rxjs';
import { MenuService } from '../menu.service';
import {   MenuItem } from '../user/user.model';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
  
})

export class MenubarComponent implements OnInit {
 
  menuItem: MenuItem[] = [];
  selectedMenuItem: MenuItem | null = null;
  @ViewChild(MatSidenav) sideNave!: MatSidenav;

  constructor(private MenuService:MenuService){
    
  }
  ngOnInit(): void {
    this.loadingMenuItem();
    interval(5000).subscribe(()=>{
      this.loadingMenuItem();
    })
  }
 
  loadingMenuItem() {
    this.MenuService.getMenuTitle().subscribe(title => {
      if (this.hasMenuItemsChanged(this.menuItem, title)) {
        this.menuItem = title;
        console.log(this.menuItem);
      }
    });
  }
  
  private hasMenuItemsChanged(previousItems: MenuItem[], newItems: MenuItem[]): boolean {
    if (previousItems.length !== newItems.length) {
      return true;
    }
  
    for (let i = 0; i < previousItems.length; i++) {
      if (previousItems[i].id !== newItems[i].id || previousItems[i].title !== newItems[i].title || hasDifferentPrice(previousItems[i].product, newItems[i].product) ) {
        return true;
      }
    }
  
    return false;
  }
  selectMenuItem(menuItem: MenuItem): void {
    this.selectedMenuItem = menuItem;
  }

  clearSelection(): void {
    this.selectedMenuItem = null;
  }
}
function hasDifferentPrice(previousProduct: any[], newProduct: any[]): boolean {
  if (previousProduct.length !== newProduct.length) {
    return true; // Length of product arrays is different
  }

  for (let i = 0; i < previousProduct.length; i++) {
    if (previousProduct[i].price !== newProduct[i].price) {
      return true; // Price is different for at least one product
    }
  }

  return false; // Prices are the same for all products
}

