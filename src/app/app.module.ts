import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { SubjectListComponent } from './screens/subject-list/subject-list.component';
import { QuizComponent } from './screens/quiz/quiz.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { QuizAdminComponent } from './admin/quiz-admin/quiz-admin.component';
import { LayoutsAdminComponent } from './admin/layouts-admin/layouts-admin.component';
import { SubjectsAdminComponent } from './admin/subjects-admin/subjects-admin.component';
import { SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { UserAdminComponent } from './admin/user-admin/user-admin.component';
import { CreateSubjectComponent } from './admin/create-subject/create-subject.component';
import { ListMarksComponent } from './screens/list-marks/list-marks.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubjectListComponent,
    LoginComponent,
    QuizComponent,
    HomeLayoutComponent,
    HomeAdminComponent,
    QuizAdminComponent,
    LayoutsAdminComponent,
    SubjectsAdminComponent,
    UserAdminComponent,
    CreateSubjectComponent,
    ListMarksComponent,
    CreateUserComponent,
    EditUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              // environment.GOOGLE_CLIENT_ID
              "275288905489-e6l8m1b3iutbmsddhb0l489inmdv023c.apps.googleusercontent.com"
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
