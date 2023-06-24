import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { interval } from 'rxjs';
import { MenuService } from '../service/menu.service';
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
    interval(300).subscribe(()=>{
      this.loadingMenuItem();
    })
  }
  calculateRemainingDays(expiryDate: string): string{
    const currentDate = new Date();
    const expiry = new Date(expiryDate);
    const timeDiff = expiry.getTime() - currentDate.getTime();

    if (timeDiff < 0) {
      return "Expired";
    }

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? 's' : ''} remaining`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} remaining`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} remaining`;
    } else  if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} remaining`;
    }else{
      return `${seconds} second${seconds > 1 ? 's' : ''} remaining`;
    }
  
  }

  loadingMenuItem() {
    this.MenuService.getMenuTitle().subscribe(title => {
      if (this.hasMenuItemsChanged(this.menuItem, title)) {
        this.menuItem = title;
        console.log(this.menuItem);
      }
    });
  }
  private hasDifferentExpiry(previousProduct: any[], newProduct: any[]): boolean {
    if (previousProduct.length !== newProduct.length) {
      return true; // Length of product arrays is different
    }
    for (let i = 0; i < previousProduct.length; i++) {
      if (previousProduct[i].exp !== newProduct[i].exp) {
        return true; // Expiry date is different for at least one product
      }
    }
  
    return false;
  }
  private hasMenuItemsChanged(previousItems: MenuItem[], newItems: MenuItem[]): boolean {
    if (previousItems.length !== newItems.length) {
      return true;
    }
  
    for (let i = 0; i < previousItems.length; i++) {
      if (previousItems[i].id !== newItems[i].id || previousItems[i].title !== newItems[i].title || hasDifferentPrice(previousItems[i].product, newItems[i].product)|| this.hasDifferentExpiry(previousItems[i].product, newItems[i].product) ) {
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

