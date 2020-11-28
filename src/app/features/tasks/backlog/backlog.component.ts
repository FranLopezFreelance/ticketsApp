import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Backlog } from 'src/app/core/classes/Backlog.class';
import { Task } from 'src/app/core/classes/Task.class';
import { EventsService } from 'src/app/core/services/events.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit, OnDestroy {

  @Input() backlog: Backlog;
  @Input() selected_user: number;
  tasksInitial: Task[];
  tasksInProgress: Task[];
  tasksPendingTest: Task[];
  tasksDone: Task[];
  eventsSubscription: Subscription;

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.getTasks();
    this.eventsSubscription = this.eventsService.changeUser.subscribe((u: number) => {
      this.selected_user = Number(u);
      this.getTasks();
    })
  }

  getTasks(){
    console.log(this.selected_user);
    this.backlog.setSelectedUser(this.selected_user);
    this.tasksInitial = this.backlog.getTaskByState(0);
    this.tasksInProgress = this.backlog.getTaskByState(1);
    this.tasksPendingTest = this.backlog.getTaskByState(2);
    this.tasksDone = this.backlog.getTaskByState(3);
  }

  moveTask(event: CdkDragDrop<string[]>) {
    const task = event.previousContainer.data[event.previousIndex];
    const container = event.container.element.nativeElement.classList;
    this.backlog.moveTask(task, container);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data, event.previousIndex,
        event.currentIndex);
    }
  }

  ngOnDestroy(){
    (this.eventsSubscription) ? this.eventsSubscription.unsubscribe : null;
  }

}
