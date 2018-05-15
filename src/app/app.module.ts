import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CoursesService } from './services/courses.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentsService } from './services/students.service';
import { SubjectsService } from './services/subjects.service';
import { TeachersService } from './services/teachers.service';



@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.components,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CoursesService,StudentsService,SubjectsService,TeachersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
