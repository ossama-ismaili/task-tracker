import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  timeIcon: IconDefinition = faTimes;

  @Input() task:Task = {
    id: 0,
    text: '',
    day: '',
    reminder: false
  };

  @Output() deleteTask: EventEmitter<number> = new EventEmitter();
  @Output() toggleTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(taskId: number): void{
    this.deleteTask.emit(taskId);
  }

  onToggle(task: Task): void{
    this.toggleTask.emit(task);
  }
}
