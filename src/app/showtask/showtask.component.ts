import {Component, OnInit} from '@angular/core';
import {AppSingletonService} from "../app.singletonservice";
import {Task} from '../task';
import {Router} from "@angular/router";

@Component ({
  selector: 'show',
  templateUrl: './app/showtask/showtask.component.html',
  styleUrls: ['']
})

export class ShowTaskComponent implements OnInit {
  myTasks: Task[];

  constructor(private service: AppSingletonService, private router: Router) {
  }

  ngOnInit() {
    this.myTasks = this.service.tasks;
  }

  deleteTask(i) {
    this.service.delete(i)
  }

  goToEdit(i: number) {
    this.router.navigate(['edit',i])
  }

}
