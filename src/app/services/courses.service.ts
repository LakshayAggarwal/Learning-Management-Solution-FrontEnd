import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../Model/Course';
import { Batch } from '../Model/Batch';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CoursesService {

  constructor(private http: HttpClient) {

   }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>("https://young-depths-26751.herokuapp.com/courses")
  }

  addCourse(name:string): Observable<Course> {
    return this.http.post<Course>("https://young-depths-26751.herokuapp.com/courses?name="+name,name);
  }

  addbatch(name: string, id: number) {
    return this.http.post<Batch>("https://young-depths-26751.herokuapp.com/courses/" + id + "/batches?name=" + name, httpOptions)
  }

  viewbatch(id: number) {

    return this.http.get<Batch[]>("https://young-depths-26751.herokuapp.com/courses/" + id + "/batches", httpOptions)
  }

}
