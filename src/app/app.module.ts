import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule  // Here we're importing CoursesModule we've created, remember to export it in courses.module.ts
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
