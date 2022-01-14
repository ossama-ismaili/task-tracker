import { Component, Input, OnInit } from '@angular/core';
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
    text: '',
    day: '',
    reminder: false
  };

  constructor() { }

  ngOnInit(): void {
  }
}
