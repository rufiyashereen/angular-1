import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Task {
  title: string;
  summary: string;
  dueDate: string
}
@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  @Output() cancelingTask = new EventEmitter<boolean>();
  @Output() addTask = new EventEmitter<Task>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancel(){
    this.cancelingTask.emit(false);
  }

  onSubmit(){
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate : this.enteredDueDate
      
    })
  }


} 
