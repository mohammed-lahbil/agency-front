import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8080/clients';

  findAll(): Observable<Client[]>{
    return this.http.post<Client[]>(this.baseUrl + "/all", {});
  }

  delete(client: Client){
    return this.http.post(this.baseUrl + "/delete", client);
  }

  add(client: Client){
    return this.http.post<Client>(this.baseUrl + "/create", client);
  }

  update(client: Client){
    return this.http.post(this.baseUrl + "/update", client);
  }

  getClient(id: string){
    return this.http.post(this.baseUrl+'/get', id);
  }
}
