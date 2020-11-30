import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { Backlog } from 'src/app/core/classes/Backlog.class';
import { BacklogService } from 'src/app/core/services/backlog.service';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss']
})
export class CreateTaskDialogComponent implements OnInit {

  users$: Observable<any>;

  constructor(
    public dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    private backlogService: BacklogService,
    @Inject(MAT_DIALOG_DATA) public backlog: Backlog
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.users$ = this.backlogService.getUsers();
  }

}
