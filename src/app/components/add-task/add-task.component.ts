import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostTask } from 'src/app/PostTask';
import { Validation } from 'src/app/Validation';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  //Validation
  textValidation: Validation = { error: false };
  dayValidation: Validation = { error: false }; 

  @Output() submitTask: EventEmitter<PostTask> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  
  }

  onSubmit(): void{
    if(this.text==='' || this.day===''){
      this.textValidation = { error: true, message: 'Field required' };
      this.dayValidation = { error: true, message: 'Field required' };
      return;
    }

    const newTask: PostTask={
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.submitTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
