import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Menu } from './user/user.model';

@Injectable({
  providedIn: 'root'
})
export class PageService {

private apiURL = '/api/menu2';

  constructor(private http:HttpClient ) {  }
  getTitle():Observable<Menu[]>{
    return this.http.get<Menu[]>(this.apiURL);
  }
}
