import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  id: any
  constructor(private http: HttpClient, private router1: Router) { }
  Users: any;
  imageBase64: any
  ngOnInit(): void {
    this.nguoinamcham();
  }
  nguoinamcham() {
    this.http.get<any>("http://localhost:3000/users")
      .subscribe(data => {
        this.Users = data;
      })
  }
  FormUsers: any = {
    name: "",
    email: "",
    avatar: "",
  }
  changeImage(event: any) {
    // 1. Định nghĩa việc đọc file
    const reader = new FileReader();
    // 2. Định nghĩa quá trình đọc file
    reader.onload = (e) => {
      this.imageBase64 = e.target?.result;
    };
    // 3. Đọc file lấy từ input
    reader.readAsDataURL(event.target.files[0]);
  }
  submitdForm(obj: any) {
    obj = {
      ...obj,
      avatar: this.imageBase64
    }
    this.http.post<any>("http://localhost:3000/users", obj).subscribe()
    this.nguoinamcham();
    return this.router1.navigate(['/user-admin']);
    // location.reload();
  }
}
