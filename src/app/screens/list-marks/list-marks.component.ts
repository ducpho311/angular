import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-marks',
  templateUrl: './list-marks.component.html',
  styleUrls: ['./list-marks.component.css']
})
export class ListMarksComponent implements OnInit {

  Code: String = "";
  constructor(private http: HttpClient, private router: ActivatedRoute) { }
  Diem: Array<any> = [];
 

  ngOnInit(): void {
  this.router.params.subscribe(data=>{
    this.Code=data['id']
  })
   this.http.get<any>("http://localhost:3000/users")
    .subscribe(data => {
      this.Diem = data;
      console.log(this.Diem);
    })
  }

}


