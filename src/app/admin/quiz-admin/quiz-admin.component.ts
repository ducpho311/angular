import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-admin',
  templateUrl: './quiz-admin.component.html',
  styleUrls: ['./quiz-admin.component.css']
})
export class QuizAdminComponent implements OnInit {

  constructor(private http: HttpClient) { }
  keyWords: string = "";
  subjects: Array<any> = [];
  ngOnInit(): void {
    this.http.get<any>("http://localhost:3000/subjects")
    .subscribe(data => {
      this.subjects = data;
    })
  }



}
