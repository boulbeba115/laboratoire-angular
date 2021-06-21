import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Outil } from 'src/app/models/outil.model';
const baseUrl = 'http://localhost:8090/api/outil';
@Injectable({
  providedIn: 'root'
})
export class OutilService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Outil[]> {
    return this.http.get<Outil[]>(baseUrl);
  }
  createOutil(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  deleteOutil(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  getOutilById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

}
