import { Task } from './Task.class';

export class Backlog {
  id: number;
  sprint_id: number;
  name: string;
  description: string;
  tasks: any[];
  private selected_user: number;

  constructor(
    id: number,
    sprint_id: number,
    name: string,
    description: string,
    tasks: any[],
  ){
    this.id = id;
    this.sprint_id = sprint_id;
    this.name = name;
    this.description = description;
    this.tasks = tasks.map(t => {

      return new Task(t.id, t.backlog_id, t.name, t.users, t.description, t.comments, t.state, t.priority);
    });
  }

  getHeadingName(){
    return `#${this.id}-${this.name} (${this.tasks.length})`;
  }

  hasTasks(){
    return this.tasks.length
  }

  getTaskByState(state: number){
    if(this.selected_user == 0){
      return this.tasks.filter(t => t.state == state);
    }else{
      return this.tasks.filter(t => t.state == state && t.users.includes(this.selected_user));
    }
  }

  moveTask(moovedTask: any, container: DOMTokenList){
    let state: number;

    if(container.contains('initial')){
      state = 0;
    } else if (container.contains('in-progress')){
      state = 1;
    } else if (container.contains('pending-test')){
      state = 2;
    } else if (container.contains('done')) {
      state = 3;
    }

    this.tasks.map(t => {
      if(t.id == moovedTask.id){
        t.state = state;
      }
    });
  }

  setSelectedUser(userId: number){
    this.selected_user = userId;
  }
}
