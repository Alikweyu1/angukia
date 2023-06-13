import { Component, OnInit } from '@angular/core';
import { Menu } from '../user/user.model';
import { PageService } from '../page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  selectedItem: Menu[] = [];
  menuData: Menu[] = [];
  ngOnInit(): void {
    this.menuViewModel.getTitle().subscribe(data =>{
      this.menuData = data
    })
  }
  constructor(private menuViewModel: PageService){}
  openPage(item: Menu) {
   
  }

}
