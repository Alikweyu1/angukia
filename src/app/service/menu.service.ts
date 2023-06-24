import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  MenuItem } from '../user/user.model';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = '/api/menu';
  constructor(private http:HttpClient) { }
  getMenuTitle ():Observable<MenuItem[]>{
   return this.http.get<MenuItem[]>(this.apiUrl);
  }
}
