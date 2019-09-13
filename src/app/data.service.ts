import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Contato } from 'src/models/contato.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient

  ) { }

  createAccount(data: any) {
    return this.http.post(`${environment.apiBalta}v1/account`, data);
  }

  auth(data) {
    return this.http.post('http://localhost:3001/accounts/authenticate', data);
  }
  // auth(data: any) {
  //   return this.http.post(`${environment.apiBalta}v1/account/login`, data);
  // }

  createContato(data: any) {
    return this.http.post(`${environment.apiUrl}/contato`, data);
  }


  getContatos() {
    return this.http.get(`${environment.apiUrl}/contato`);
  }

  getContato(id: string) {
    return this.http.get(`${environment.apiUrl}/contato/${id}`);
  }

  put(contato: Contato) {
    return this.http.put(`${environment.apiUrl}/${contato.id}`, contato);
  }

  delete(contato: Contato) {
    return this.http.delete(`${environment.apiUrl}/${contato.id}`);
  }
}
