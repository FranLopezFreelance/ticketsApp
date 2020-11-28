import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/core/classes/Task.class';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { BacklogService } from 'src/app/core/services/backlog.service';

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
    private backlogServcice: BacklogService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.users$ = this.backlogServcice.getUsersByIds(this.task.users);
  }

}
