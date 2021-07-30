import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
export class DataService {
  
  private baseURL='http://localhost:8081/members';

  constructor(private httpClient:  HttpClient) { }
  readAll(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }

  read(id): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  create(data): Observable<any> {
    return this.httpClient.post(this.baseURL, data);
  }

  update(id, data): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/editMember&Customer/${id}`, data, {responseType: 'text'});
  }

  delete(id): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/deleteFromBoth/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(this.baseURL);
  }

  searchByName(name): Observable<any> {
    return this.httpClient.get(`${this.baseURL}?name=${name}`);
  }
}
