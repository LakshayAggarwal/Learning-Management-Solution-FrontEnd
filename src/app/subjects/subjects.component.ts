import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../services/subjects.service';
import { Subject } from '../Model/Subject';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjectList: Subject[]

  constructor(private subjectsService: SubjectsService) { 
    this.subjectList=[]
  }

  ngOnInit() {
  }

  listSubjects() {
    this.subjectsService.getSubjects()
      .subscribe((subjects) => {
        console.log(subjects);
        this.subjectList=subjects;
    })
  }

  addSubject(name:string) {
    this.subjectsService.addSubject(name)
      .subscribe((subject) => {
        console.log("Subject added");
        
    })
  }

}
