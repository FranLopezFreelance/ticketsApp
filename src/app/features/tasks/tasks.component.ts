import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { fromEvent, Observable, Subscription } from 'rxjs';
import { BacklogService } from 'src/app/core/services/backlog.service';
import { EventsService } from 'src/app/core/services/events.service';
import { CreateBacklogDialogComponent } from 'src/app/shared/create-backlog-dialog/create-backlog-dialog.component';
import { CreateSprintDialogComponent } from 'src/app/shared/create-sprint-dialog/create-sprint-dialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {

  users$: Observable<any>;
  sprints$: Observable<any>;
  backlog$: Observable<any>;
  sprint_url: string;
  selected_user: number = 0;
  fixedSprintHeader: boolean = false;
  fixedSprintsCol: boolean = false;
  scrollEvent: Subscription;

  constructor(
    private route: ActivatedRoute,
    private backlogService: BacklogService,
    private eventsService: EventsService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.scrollEvent = fromEvent(window, 'scroll').subscribe((e: any) => {
      if(e.srcElement.children[0].scrollTop > 54){
        this.fixedSprintHeader = true;
      }else{
        this.fixedSprintHeader = false;
      }

      if(e.srcElement.children[0].scrollTop > 64){
        this.fixedSprintsCol = true;
      }else{
        this.fixedSprintsCol = false;
      }
    });

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

  newSprint(){
    const dialogRef = this.dialog.open(CreateSprintDialogComponent, {
      width: '550px', data: {}, autoFocus: false
    });
    dialogRef.afterClosed().subscribe(sprint => {
      //console.log(sprint);
    });
  }

  newBacklog(){
    const dialogRef = this.dialog.open(CreateBacklogDialogComponent, {
      width: '550px', data: {}, autoFocus: false
    });
    dialogRef.afterClosed().subscribe(task => {
      //console.log(task);
    });
  }

  changeUser(){
    this.eventsService.changeUser.emit(this.selected_user);
  }

  ngOnDestroy(){
    this.scrollEvent.unsubscribe();
  }

}
