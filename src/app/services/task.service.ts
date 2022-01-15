import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../helpers/consts';
import { Task } from '../Task';

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
}
