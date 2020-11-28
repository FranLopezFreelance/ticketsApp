import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    AccordionModule.forRoot(),
    DragDropModule
  ],
  exports: [
    FormsModule,
    FontAwesomeModule,
    AccordionModule,
    DragDropModule
  ]
})
export class SharedModule { }
