import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { NavcomponentComponent } from './navcomponent/navcomponent.component';
import { TestComponent } from './Test/test.component';
import { DisplaypipesComponent } from './displaypipes/displaypipes.component';
import { DisplayServiceComponent } from './display-service/display-service.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'course',component:CoursesComponent},
    {path:'displaypipes',component:DisplaypipesComponent},
    {path:'displayservice',component:DisplayServiceComponent},
    {path:'posts/:id/:status',component:PostsComponent}
  ])],
  exports: [RouterModule]
})

export class AppRoutingModule { }
