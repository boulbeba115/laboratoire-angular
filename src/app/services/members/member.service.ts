import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member, Student, Teacher } from 'src/app/models/membre.model';
const baseUrl = 'http://localhost:8090/api/members';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Member[]> {
    return this.http.get<Member[]>(baseUrl + '/all');
  }
  getAllTeachers(): Observable<Member[]> {
    return this.http.get<Member[]>(baseUrl + '/teacher/all');
  }
  createStudent(data: any): Observable<any> {
    return this.http.post(baseUrl + '/student', data);
  }
  createTeacher(data: any): Observable<any> {
    return this.http.post(baseUrl + '/teacher', data);
  }
  deleteStudent(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/student/${id}`);
  }
  deleteTeacher(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/teacher/${id}`);
  }
  getById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

}
