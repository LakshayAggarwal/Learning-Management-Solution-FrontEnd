import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Student } from '../Model/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentList: Student[]

  constructor(private studentService: StudentsService) {
    this.studentList=[]
   }

  ngOnInit() {
  }

  listStudents() {
    this.studentService.getStudents()
      .subscribe((students) => {
        this.studentList=students;
    })
  }

  addStudent(name:string) {
    this.studentService.addStudent(name)
      .subscribe((student) => {
        console.log("Student added");        
    })
  }

}
