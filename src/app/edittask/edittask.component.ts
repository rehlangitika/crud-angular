import {Component, OnInit} from '@angular/core';
import {AppSingletonService} from "../app.singletonservice";
import {Task} from '../task';
import {Router, ActivatedRoute} from "@angular/router";

@Component ({
  selector: 'edit',
  templateUrl: './app/edittask/edittask.component.html',
  styleUrls: ['']
})

export class EditTaskComponent implements OnInit {
  myTasks: Task[];
  index: number;
  task: Task;
  constructor(private service: AppSingletonService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.myTasks = this.service.tasks;
    this.route.params.subscribe((data: any) => {
      this.index = +data.id;
      this.task = this.myTasks[this.index];
      this.service.delete(this.index);
    });
  }

  create(taskDate: string, taskTitle: string, taskDesc: string, taskPriority: string) {
    let t = new Task(taskDate, taskTitle, taskDesc, taskPriority);
    this.service.createTask(t)
    console.log("Date: " + t.date+" Title: " + t.title + " Description: " + t.description +" Priority: "+t.priority);
  }
}
