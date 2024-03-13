import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  private apiUrl = 'https://localhost:7125/api/SuperHero'

  constructor(private http: HttpClient) { }

  getDatos():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
