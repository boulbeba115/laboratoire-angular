import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8090/api/stats';
@Injectable({
    providedIn: 'root'
})
export class StatService {

    constructor(private http: HttpClient) { }

    public getStats(): Observable<any[]> {
        return this.http.get<any[]>(baseUrl);
    }


}
