import { Component, OnInit } from '@angular/core';
import {  SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private socialService: SocialAuthService, private authService: AuthServiceService, private router: Router
    ) { }

  
  ngOnInit(): void {
    
  }

  googleLogin(){
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(resp => {
      this.authService.login(resp.email, resp.id)

        .subscribe(data => {

          console.log("LoginComponent", data);
        })
      this.router.navigate([''])

    })

  }
  googleLogin1(){
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(data => 
         {
          console.log("LoginComponent", data);
        }
    )
  }


}
