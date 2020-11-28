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
      return new Task(t.id, t.backlog_id, t.name, t.users, t.state);
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

  moveTask(moovedTask: any, container: string){
    let state: number;
    switch(container){
      case 'cdk-drop-list-0':
        state = 0;
        break;
      case 'cdk-drop-list-1':
        state = 1;
        break;
      case 'cdk-drop-list-2':
        state = 2;
        break;
      case 'cdk-drop-list-3':
        state = 3;
        break;
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
