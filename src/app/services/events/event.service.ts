import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenement } from 'src/app/models/event.model';

const baseUrl = 'http://localhost:8090/api/event';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(baseUrl);
  }
  addEvent(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  deleteEvent(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  getEventById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

}
