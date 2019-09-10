import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './appDay2/second.component';
import { TestComponent } from './test/test.component';
import { CoursesComponent } from './courses/courses.component';
import { NavcomponentComponent } from './navcomponent/navcomponent.component';
import { DisplaypipesComponent } from './displaypipes/displaypipes.component';
import { FundamentalComponent } from './fundamental/fundamental.component';
import { SummaryPipe } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe';
import { FormsModule} from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { ServiceComponentService } from './service/service-component.service';
import { DisplayServiceComponent } from './display-service/display-service.component';
import { HttpClientModule } from '@angular/common/http';
import { DirectiveDirective } from './directive.directive';
import { PostsComponent } from './posts/posts.component'

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    TestComponent, 
    CoursesComponent,
     NavcomponentComponent, 
     DisplaypipesComponent, 
     FundamentalComponent, 
     SummaryPipe, 
     TitleCasePipe,
     StudentComponent,
     DisplayServiceComponent,
     DirectiveDirective,
     PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServiceComponentService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
