import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursesComponent],
  exports :[CoursesComponent] // Here we export the component for who wants to use it!
})
export class CoursesModule { }
