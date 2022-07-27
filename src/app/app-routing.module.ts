import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { SubjectListComponent } from './screens/subject-list/subject-list.component';
import { QuizComponent } from './screens/quiz/quiz.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { QuizAdminComponent } from './admin/quiz-admin/quiz-admin.component';
import { LayoutsAdminComponent } from './admin/layouts-admin/layouts-admin.component';
import { SubjectsAdminComponent } from './admin/subjects-admin/subjects-admin.component';
import { AuthGuard } from './helpers/auth.guard';
import { UserAdminComponent } from './admin/user-admin/user-admin.component';
import { CreateSubjectComponent } from './admin/create-subject/create-subject.component';
import { ListMarksComponent } from './screens/list-marks/list-marks.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      { 
        path: 'mon-hoc',
        component: SubjectListComponent
      }, 
      { 
        path: 'list-marks/:id',
        component: ListMarksComponent
      }, 
      {
        path: 'quiz/:idmonhoc',
        component: QuizComponent,
        canActivate: [AuthGuard]
      }
    ],
    
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path:"",
    component: LayoutsAdminComponent,
    children:[
        {
          path:"admin",
        component: HomeAdminComponent
        },
        {
          path: "quiz-admin",
          component: QuizAdminComponent
        },

        {
          path: "subjects-admin/:idquiz",
          component: SubjectsAdminComponent
        },
        {
          path: "user-admin",
          component: UserAdminComponent
        },
        {
          path:"create-subject/:Code",
          component: CreateSubjectComponent
        },
        {
          path:"create-user",
          component: CreateUserComponent
        },
        {
          path:"edit-user/:iduser",
          component: EditUserComponent
        },
        

    ],
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
