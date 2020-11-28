import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/meterial.module';
import { TaskDetailDialogComponent } from './task-detail-dialog/task-detail-dialog.component';
import { BacklogDetailDialogComponent } from './backlog-detail-dialog/backlog-detail-dialog.component';
import { CreateBacklogDialogComponent } from './create-backlog-dialog/create-backlog-dialog.component';
import { CreateTaskDialogComponent } from './create-task-dialog/create-task-dialog.component';

const ENTRY_COMPONENTS = [
  TaskDetailDialogComponent,
  BacklogDetailDialogComponent,
  CreateBacklogDialogComponent,
  CreateTaskDialogComponent
]
@NgModule({
  declarations: [
    ENTRY_COMPONENTS
  ],
  entryComponents: [
    ENTRY_COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    AccordionModule.forRoot(),
    MaterialModule
  ],
  exports: [
    FormsModule,
    FontAwesomeModule,
    AccordionModule,
    MaterialModule
  ]
})
export class SharedModule { }
