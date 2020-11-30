import { Component } from '@angular/core';
import { BacklogService } from './core/services/backlog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tickets-app';
  currentSprint: any;

  constructor(
    private backlogService: BacklogService
  ){
    this.backlogService.getCurrentSprint().subscribe(cs => {
      this.currentSprint = cs;
    });
  }
}
