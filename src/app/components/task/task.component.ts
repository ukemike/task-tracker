import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {  // Declaring the tasks variable
  tasks: Task[] = [];  // Initializing the tasks

  constructor(private taskService: TaskService) {

   }  // Injecting the taskService into the component constructor

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks); // Getting the tasks from the taskService
  }  // Getting the tasks from the taskService

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id)); // Deleting the task from the taskService
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder; // Toggling the reminder
    this.taskService.toggleReminder(task).subscribe(); // Toggling the reminder from the taskService
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(() => this.tasks.push(task)); // Adding the task to the taskService 
  }

}   
