import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VillainsService {

  constructor( private http: HttpClient) { }
  
}
