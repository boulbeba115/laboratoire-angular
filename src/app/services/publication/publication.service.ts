import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication } from 'src/app/models/publication.model';
const baseUrl = 'http://localhost:8090/api/publication';
@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Publication[]> {
    return this.http.get<Publication[]>(baseUrl);
  }
  createPublication(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  deletePublication(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  getPublicationById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

}
