import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../Model/Teacher';

@Injectable()
export class TeachersService {

  constructor(private http: HttpClient) { }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>("https://young-depths-26751.herokuapp.com/teachers")
  }

  addTeacher(name:string): Observable<Teacher> {
    return this.http.post<Teacher>("https://young-depths-26751.herokuapp.com/teachers?name="+name,name);
  }

}
