import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from '../Model/Course';
import { Batch } from '../Model/Batch';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseList: Course[]
  batchList: Batch[]
  

  constructor(private coursesService: CoursesService) { 
    this.courseList=[];
    this.batchList=[]
  }

  ngOnInit() {
    
  }

  selected(id: number) {
    let name = prompt("Enter the Name Of Batch", "")
    this.coursesService.addbatch(name, id).subscribe(() => {
      alert("done")
    })
  }

  seeBatch(id: number) {
    this.coursesService.viewbatch(id).subscribe((b) => {
      this.batchList = b
    })
  }

  listAllCourses() {
    this.coursesService.getCourses()
      .subscribe((courses) => {
        console.log(courses);
        this.courseList=courses;
    })
  }

  addCourse(name:string) {
    this.coursesService.addCourse(name)
      .subscribe((course) => {
        console.log("Success");
        
    })
  }
}
