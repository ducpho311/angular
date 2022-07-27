import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/service/subject.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subjects: Array<any> = [];
  constructor(private subjectService: SubjectService) { }
  ngOnInit(): void {
    this.listSubject()
  }
  listSubject(){
    this.subjectService.list()
      .subscribe(data => {
        this.subjects = data;
      })
  }
}
