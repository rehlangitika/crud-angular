import {Injectable} from '@angular/core';
import {Task} from './task';

@Injectable()

export class AppSingletonService {
  tasks: Task[] = [{
    date: '19/02/1993',
    title: 'first',
    description: 'first task',
    priority: 'high'
  }];

  createTask(t: Task) {
    this.tasks.push(t)
  }

  delete(i) {
    this.tasks.splice(i,1)
  }

}
