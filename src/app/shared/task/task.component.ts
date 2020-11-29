import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/core/classes/Task.class';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { BacklogService } from 'src/app/core/services/backlog.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { TaskDetailDialogComponent } from '../task-detail-dialog/task-detail-dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  users$: Observable<any>;
  faUser = faUser;
  showDialogTimer: any;

  constructor(
    private backlogServcice: BacklogService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.users$ = this.backlogServcice.getUsersByIds(this.task.users);
  }

  showTaskDetailTimer(task: Task){
    this.showDialogTimer = setTimeout(() => {
      this.showTaskDetail(task);
    }, 1000);
  }

  cancelTaskDetailTimer(){
    clearTimeout(this.showDialogTimer);
  }

  showTaskDetail(task: Task){
    clearTimeout(this.showDialogTimer);
    const dialogRef = this.dialog.open(TaskDetailDialogComponent, {
      width: '500px', data: task, autoFocus: false
    });
    dialogRef.afterClosed().subscribe(task => {
      //console.log(task);
    });
  }

}
