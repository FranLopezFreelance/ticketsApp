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

  showTaskDetail(task: Task){
    const dialogRef = this.dialog.open(TaskDetailDialogComponent, {
      width: '450px', data: task, autoFocus: false
    });
    dialogRef.afterClosed().subscribe(task => {
      console.log(task);
    });
  }

}
