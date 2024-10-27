import { Component,EventEmitter, Input, Output } from '@angular/core';
import {DatePipe} from '@angular/common'
interface Task{
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:Task | undefined
  @Output() completedTask = new EventEmitter<string>();

  onCompleteUser(){
    this.completedTask.emit(this.task!.id);
    console.log(this.task?.id);
  }
  
}
