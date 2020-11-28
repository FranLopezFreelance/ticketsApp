import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { BacklogService } from 'src/app/core/services/backlog.service';
import { EventsService } from 'src/app/core/services/events.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  users$: Observable<any>;
  sprints$: Observable<any>;
  backlog$: Observable<any>;
  sprint_url: string;
  selected_user: number = 0;

  constructor(
    private route: ActivatedRoute,
    private backlogService: BacklogService,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.getUsers();
    this.getSprints();
    this.route.params
      .subscribe(params => {
        this.sprint_url = params.sprint;
        this.getBacklog();
      });
  }

  getUsers(){
    this.users$ = this.backlogService.getUsers();
  }

  getSprints(){
    this.sprints$ = this.backlogService.getSprints();
  }

  getBacklog(){
    this.backlog$ = this.backlogService.getBacklog(this.sprint_url);
  }

  changeUser(){
    this.eventsService.changeUser.emit(this.selected_user);
  }

}
