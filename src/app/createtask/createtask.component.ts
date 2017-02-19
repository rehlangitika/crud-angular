import {Component, OnInit} from '@angular/core';
import {AppSingletonService} from "../app.singletonservice";
import {Task} from '../task';

@Component ({
  selector: 'create',
  templateUrl: './app/createtask/createtask.component.html',
  styleUrls: ['']
})

export class CreateTaskComponent implements OnInit {
  myTasks: Task[];

  constructor(private service: AppSingletonService) {

  }

  ngOnInit() {
    this.myTasks = this.service.tasks;
  }

  create(taskDate: string, taskTitle: string, taskDesc: string, taskPriority: string) {
    let t = new Task(taskDate, taskTitle, taskDesc, taskPriority);
    this.service.createTask(t)
    console.log("Date: " + t.date+" Title: " + t.title + " Description: " + t.description +" Priority: "+t.priority);
  }
}
