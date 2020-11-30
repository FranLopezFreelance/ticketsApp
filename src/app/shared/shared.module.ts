import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/meterial.module';
import { BacklogComponent } from './backlog/backlog.component';
import { TaskComponent } from './task/task.component';
import { TaskDetailDialogComponent } from './task-detail-dialog/task-detail-dialog.component';
import { BacklogDetailDialogComponent } from './backlog-detail-dialog/backlog-detail-dialog.component';
import { CreateBacklogDialogComponent } from './create-backlog-dialog/create-backlog-dialog.component';
import { CreateTaskDialogComponent } from './create-task-dialog/create-task-dialog.component';
import { CreateSprintDialogComponent } from './create-sprint-dialog/create-sprint-dialog.component';
import { SprintDetailDialogComponent } from './sprint-detail-dialog/sprint-detail-dialog.component';

const Declarations = [
  BacklogComponent,
  TaskComponent
];

const EntryComponents = [
  BacklogDetailDialogComponent,
  CreateBacklogDialogComponent,
  TaskDetailDialogComponent,
  CreateTaskDialogComponent,
  CreateSprintDialogComponent,
  SprintDetailDialogComponent
]
@NgModule({
  declarations: [
    Declarations,
    EntryComponents
  ],
  entryComponents: [
    EntryComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    AccordionModule.forRoot(),
    MaterialModule
  ],
  exports: [
    Declarations,
    FormsModule,
    FontAwesomeModule,
    AccordionModule,
    MaterialModule
  ]
})
export class SharedModule { }
