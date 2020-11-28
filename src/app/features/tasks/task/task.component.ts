import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/core/classes/Task.class';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  faUser = faUser;

  constructor() { }

  ngOnInit() {
  }

}
