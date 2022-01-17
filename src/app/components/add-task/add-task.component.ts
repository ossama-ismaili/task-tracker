import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostTask } from 'src/app/PostTask';
import { UiService } from 'src/app/services/ui.service';
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
  showAddTask: boolean = false;
  subsription: Subscription;

  //Validation
  textValidation: Validation = { error: false };
  dayValidation: Validation = { error: false }; 

  @Output() submitTask: EventEmitter<PostTask> = new EventEmitter(); 

  constructor(private uiService: UiService) { 
    this.subsription = uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  
  }

  handleTextChange(): void {
    this.textValidation = { error: false};
  }

  handleDayChange(): void {
    this.dayValidation = { error: false};
  }

  onSubmit(): void{
    if(this.text===''){
      this.textValidation = { error: true, message: 'Field required' };
    }
    if(this.day===''){
      this.dayValidation = { error: true, message: 'Field required' };
    }
    if(this.text==='' || this.day===''){
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
