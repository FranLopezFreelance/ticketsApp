/* {
  id: 82768,
  backlog_id: 1762876,
  name: 'Realizar diseño',
  users: [
    {
      id: 1,
      name: 'Verónica Pacheco'
    }
  ],
  state: 3
}, */

import { TaskStates } from '../enums/TaskStates.enum';

export class Task {
  id: number;
  backlog_id: number;
  name: string;
  users: any[];
  state: number;

  constructor(
    id: number,
    backlog_id: number,
    name: string,
    users: any[],
    state: number,
  ){
    this.id = id;
    this.backlog_id = backlog_id;
    this.name = name;
    this.users = users;
    this.state = state;
  }

  getStateCSSClass(){
    switch(this.state){
      case TaskStates.Initial:
        return 'initial';
      case TaskStates.InProgress:
        return 'in-progress';
      case TaskStates.PendingTest:
        return 'pending-test';
      case TaskStates.Done:
        return 'done';
    }
  }
}
