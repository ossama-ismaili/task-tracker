import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../helpers/consts';
import { Task } from '../Task';

const headerOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksApiUrl: string = `${apiUrl}/tasks`;

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.tasksApiUrl);
  }

  deleteTask(taskId: number): Observable<void>{
    return this.http.delete<void>(`${this.tasksApiUrl}/${taskId}`);
  }

  putTask(task: Task): Observable<void>{
    return this.http.put<void>(`${this.tasksApiUrl}/${task.id}`, task, headerOptions);
  }
}
