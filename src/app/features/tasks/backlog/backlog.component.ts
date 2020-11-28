import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Backlog } from 'src/app/core/classes/Backlog.class';
import { Task } from 'src/app/core/classes/Task.class';
import { EventsService } from 'src/app/core/services/events.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {

  @Input() backlog: Backlog;
  tasksInitial: Task[];
  tasksInProgress: Task[];
  tasksPendingTest: Task[];
  tasksDone: Task[];

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.backlog.setSelectedUser(0);
    this.getTasks();
    this.eventsService.changeUser.subscribe((u: number) => {
      this.backlog.setSelectedUser(Number(u));
      this.getTasks();
    })
  }

  getTasks(){
    this.tasksInitial = this.backlog.getTaskByState(0);
    this.tasksInProgress = this.backlog.getTaskByState(1);
    this.tasksPendingTest = this.backlog.getTaskByState(2);
    this.tasksDone = this.backlog.getTaskByState(3);
  }

  moveTask(event: CdkDragDrop<string[]>) {
    const task = event.previousContainer.data[event.previousIndex];
    const container = event.container.id;
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

}
