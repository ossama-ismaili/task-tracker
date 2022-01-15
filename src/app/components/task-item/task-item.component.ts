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

  @Output() delete: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(taskId: number): void{
    this.delete.emit(taskId);
  }
}
