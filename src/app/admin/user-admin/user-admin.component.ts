import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

  constructor(private http: HttpClient) { }
  user: Array<any> = [];
  ngOnInit(): void {
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(data => {
      this.user = data;
    })
  }


  del(users: any){
    this.http.delete<any>(`http://localhost:3000/users/${users.id}`)
    .subscribe(data =>{
      this.user = this.user.filter(item => item.id != users.id);
    })
  }
  
}
