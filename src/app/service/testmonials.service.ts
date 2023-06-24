import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { testmonies } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class TestmonialsService {

  private apiUrlapi = '/api/testimonial';
  constructor(private http:HttpClient) { }
  getMenuTitle ():Observable<testmonies[]>{
   return this.http.get<testmonies[]>(this.apiUrlapi);
  }
}
