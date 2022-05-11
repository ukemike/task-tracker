import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'

  })
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'; // The url to the api

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> { // Getting the tasks from the mock-task
    return this.http.get<Task[]>(this.apiUrl)  // Getting the tasks from the api
  }

  deleteTask(task: Task): Observable<Task> { 
    const url = `${this.apiUrl}/${task.id}`; // The url to the api
    return this.http.delete<Task>(url); // Deleting the task from the api
  }

  toggleReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`; // The url to the api
    return this.http.put<Task>(url, task, httpOptions); // Toggling the reminder from the api
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions); // Adding the task to the api
  }
  
}
