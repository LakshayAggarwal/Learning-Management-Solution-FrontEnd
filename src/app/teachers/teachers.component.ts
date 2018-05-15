import { Component, OnInit } from '@angular/core';
import { Teacher } from '../Model/Teacher';
import { TeachersService } from '../services/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teacherList: Teacher[]

  constructor(private teachersService: TeachersService) {
    this.teacherList=[]
   }

  ngOnInit() {
  }

  listTeachers() {
    this.teachersService.getTeachers()
      .subscribe((teachers) => {
        console.log(teachers);
        this.teacherList=teachers;
    })
  }

  addTeacher(name:string) {
    this.teachersService.addTeacher(name)
      .subscribe((teacher) => {
        console.log("Success");
        
    })
  }

}
