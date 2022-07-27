import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subjects-admin',
  templateUrl: './subjects-admin.component.html',
  styleUrls: ['./subjects-admin.component.css']
})
export class SubjectsAdminComponent implements OnInit {
  quiz: Array<any> =[];
  constructor(private router: ActivatedRoute, private http: HttpClient) { }
  arr: Array<any>=[]
  id: string = "";
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = par['idquiz'];
      this.http.get<any>(`http://localhost:3000/${this.id}`)
      .subscribe(data=>{
        this.quiz = data;
      })
    })
  }

}
