import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ShowTeacherListComponent } from './teacher/show-teacher-list/show-teacher-list.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'dash',
    component:DashBoardComponent
  },
  {
    path:'teacher',
    loadChildren:()=>import('./teacher/teacher.module').then(m=>m.TeacherModule)
  },
  {
    path:'student',
   loadChildren:()=>import('./studentm/studentm.module').then(m=>m.StudentmModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
