import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id: any;
  Users: any;
  imageBase64: any;
  constructor(private http: HttpClient, private router: ActivatedRoute, private router1: Router) { }
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = par['iduser'];
      this.http.get<any>(`http://localhost:3000/users/${this.id}`)
      .subscribe(data=>{
        this.Users = data;
        this.beforeImg(this.Users.avatar)
      })
    })
    this.nguoinamcham()
  }
  nguoinamcham() {
    this.http.get<any>("http://localhost:3000/users")
      .subscribe(data => {
        this.Users = data;
      })
  }
  changeImage(event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageBase64 = e.target?.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  beforeImg(event: any){
    this.imageBase64 = event
  }
  submitdForm(obj: any){
    obj ={
      ...obj,
      avatar: this.imageBase64
    }
    this.http.put<any>(`http://localhost:3000/users/${this.id}`, obj).subscribe(data=>{})
    this.nguoinamcham();
    return this.router1.navigate(['/user-admin']);
  }
}
