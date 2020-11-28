import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BacklogComponent } from './backlog/backlog.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [TasksComponent, BacklogComponent, TaskComponent],
  imports: [
    CommonModule,
    SharedModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
