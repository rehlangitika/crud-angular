/*import {Component, OnInit} from '@angular/core';
import {AppSingletonService} from "../app.singletonservice";
import {Task} from '../task';
import {Router, ActivatedRoute} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component ({
  selector: 'edit',
  templateUrl: './app/createtask/createtask.component.html',
  styleUrls: ['']
})

export class EditTaskComponent implements OnInit {
  myTasks: Task[];
  index: number;
  task: Task;
  addForm: FormGroup;
  constructor(private service: AppSingletonService, private formBuilder: FormBuilder, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.myTasks = this.service.tasks;
    this.addForm = this.formBuilder.group({
      date: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required]
    })

    this.route.params.subscribe((data: any) => {
      this.index = +data.id;
      this.task = this.myTasks[this.index];
    });
    this.addForm.get('date').setValue(this.task.date);
    this.addForm.get('title').setValue(this.task.title);
    this.addForm.get('description').setValue(this.task.description);
    this.addForm.get('priority').setValue(this.task.priority);
  }
  addTask() {
    if (this.addForm.valid) {
      let addTask = {
        date: this.addForm.controls['date'].value,
        title: this.addForm.controls['title'].value,
        description: this.addForm.controls['description'].value,
        priority: this.addForm.controls['priority'].value
      };
      this.myTasks[this.index].description = addTask.description;
      this.myTasks[this.index].title = addTask.title;
      this.myTasks[this.index].date = addTask.date;
      this.myTasks[this.index].priority = addTask.priority;

      console.log(addTask);// addTask var contains all our form values. store it where you want
      this.addForm.reset();// this will reset our form values to null
    }
  }
}*/
