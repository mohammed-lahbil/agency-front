import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Agency } from '../../models/agency';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http: HttpClient) {
    
  }

  baseUrl: string = 'http://localhost:8080/agency';


  findAll(): Observable<Agency[]>{
    return this.http.post<Agency[]>(this.baseUrl + "/all", {});
  }

  delete(agency: Agency){
    return this.http.post(this.baseUrl + "/delete", agency);
  }

  add(agency: Agency){
    return this.http.post(this.baseUrl + "/save", agency);
  }

  update(agency: Agency){
    return this.http.post(this.baseUrl + "/update", agency);
  }

  getAgency(id: number): Observable<Agency>{
    return this.http.post<Agency>(this.baseUrl+'/findByCode', id);
  }

  getAgencyByName(name: string): Observable<Agency>{
    return this.http.post<Agency>(this.baseUrl + '/findByName', name);
  }
}
