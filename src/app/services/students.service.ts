import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../Model/Student';

@Injectable()
export class StudentsService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>("https://young-depths-26751.herokuapp.com/students")
  }

  addStudent(name:string): Observable<Student> {
    return this.http.post<Student>("https://young-depths-26751.herokuapp.com/students?name="+name,name);
  }

}
