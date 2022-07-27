import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css']
})
export class CreateSubjectComponent implements OnInit {

  code: String = "";
  question: Array<any> = [];
  formQuestion: any = {
    id: "",
    Text: "",
  };
  constructor(private http: HttpClient , private router : ActivatedRoute) { }
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.code = par['Code'];
    console.log(this.code);

    })
    
  }


  submitForm() {
    const newQuestions = { ...this.formQuestion };
    if (newQuestions.id == "") {
      this.http.post<any>("http://localhost:3000/"+ this.code, newQuestions)
        .subscribe(data => {
          this.question.push(data);
        })
    } else {
      console.log("data");
    }
    this.formQuestion = {
      id: "",
      Text: "",
    };
  }

}
