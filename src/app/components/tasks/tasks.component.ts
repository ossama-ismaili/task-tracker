import { Component, OnInit } from '@angular/core';
import { PostTask } from 'src/app/PostTask';
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

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=> this.tasks=tasks);
  }

  onDeleteTask(taskId: number): void{
    this.taskService.deleteTask(taskId).subscribe(()=>this.tasks=this.tasks.filter(t=>t.id!==taskId));
  }

  onToggleTask(task: Task): void{
    task.reminder = !task.reminder;
    this.taskService.putTask(task).subscribe();
  }

  onAddTask(task: PostTask): void{
    this.taskService.postTask(task).subscribe((addedTask)=>this.tasks.push(addedTask));
  }
}
