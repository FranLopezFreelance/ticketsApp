import { TaskPriorities } from '../enums/TaskPriority.enum';

export class Task {
  id: number;
  backlog_id: number;
  name: string;
  users: any[];
  description: string;
  comments: string;
  state: number;
  priority: number;

  constructor(
    id: number,
    backlog_id: number,
    name: string,
    users: any[],
    description: string,
    comments: string,
    state: number,
    priority: number
  ){
    this.id = id;
    this.backlog_id = backlog_id;
    this.name = name;
    this.users = users;
    this.description = description;
    this.comments = comments;
    this.state = state;
    this.priority = priority;
  }

  getName(){
    return `#${ this.id }-${this.name}`;
  }

  getState(){
    let state: string;
    switch(this.state){
      case 0:
        state = 'Pendiente';
        break;
      case 1:
        state = 'En curso';
        break;
      case 2:
        state = 'Pediente Testing';
        break;
      case 3:
        return 'Realizado';
    }
    return state;
  }

  getPriorityCSSClass(){
    switch(Number(this.priority)){
      case TaskPriorities.High:
        return 'high';
      case TaskPriorities.Medium:
        return 'medium';
      case TaskPriorities.Low:
        return 'low';
    }
  }

  getDescription(){
    return this.description;
  }

  getComments(){
    return this.comments;
  }
}
