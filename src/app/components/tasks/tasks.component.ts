import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  private fetchTasks(){
    this.taskService.getTasks().subscribe((tasks)=> this.tasks=tasks);
  }

  ngOnInit(): void {
    this.fetchTasks();
  }

  onDeleteTask(taskId: number): void{
    this.taskService.deleteTask(taskId).subscribe(()=>this.fetchTasks());
  }
}
