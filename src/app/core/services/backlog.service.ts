import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BACKLOG } from '../mocks/backlog';
import { SPRINTS } from '../mocks/sprints';
import { map } from 'rxjs/operators';
import { TASKS } from '../mocks/tasks';
import { Backlog } from '../classes/Backlog.class';
import { USERS } from '../mocks/users';

@Injectable({
  providedIn: 'root'
})
export class BacklogService {
  users = USERS;
  sprints = SPRINTS;
  backlog = BACKLOG;
  tasks = TASKS;
  constructor() { }

  getCurrentSprint(){
    const cs = this.sprints.find(s => s.current);
    return of(cs);
  }

  getUsers(){
    return of(this.users);
  }

  getUsersByIds(ids: number[]){
    let users = [];
    ids.forEach(id => {
      if(this.users.find(u => u.id == id)){
        users.push(this.users.find(u => u.id == id));
      }
    })
    return of(users);
  }

  getSprints(){
    return of(this.sprints);
  }

  getBacklog(sprint_url: string){
    const sprint = this.sprints.find(s => s.url == sprint_url);
    const backlogList = this.backlog.filter(b => b.sprint_id == sprint.id);
    let backlogListClasses = [];
    backlogList.map(b => {
      backlogListClasses.push(new Backlog(b.id, b.sprint_id, b.name, b.description, this.tasks.filter(t => t.backlog_id == b.id)));
    });
    return of(backlogListClasses);
  }
}
