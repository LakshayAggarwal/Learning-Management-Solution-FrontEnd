import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../Model/Subject';

@Injectable()
export class SubjectsService {

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>("https://young-depths-26751.herokuapp.com/subjects")
  }

  addSubject(name:string): Observable<Subject> {
    return this.http.post<Subject>("https://young-depths-26751.herokuapp.com/subjects?name="+name,name);
  }

}
