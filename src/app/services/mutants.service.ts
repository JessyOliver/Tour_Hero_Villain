import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,  } from 'rxjs';

import { Heroes } from '../model/heroes';
import { Villains } from '../model/villains';

@Injectable({
  providedIn: 'root'
})
export class MultantsService {

  constructor(private http: HttpClient) { }

  private apiUrlHeroes = 'http://localhost:3000/heroes';

  private apiUrlVillains = 'http://localhost:3000/villains';

 /* httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };*/

  getHeroes(): Observable<Heroes[]>{
    return this.http.get<Heroes[]>(this.apiUrlHeroes);
  }

  getVillains(): Observable<Villains[]>{
    return this.http.get<Heroes[]>(this.apiUrlVillains);
  }

}
