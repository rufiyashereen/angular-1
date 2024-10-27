import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { dummyTasks } from './dummytasks';
import { NgFor ,NgIf} from '@angular/common';

interface Task {
  title: string;
  summary: string;
  dueDate: string
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NgFor,NgIf,NewtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;
  addTask : boolean = false;
  tasks = dummyTasks;
 
  
  get SelectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  trackByTaskId(index: number, task: any): string {
    return task.id;
  }
  deleteTask(id: string){
    console.log("deleted task:"+id);
    this.tasks =  this.tasks.filter((task)=>
      task.id !== id
    )
    console.log(this.tasks);
    // this.tasks.remove(this.completedTask)
  }
  onFormSubmit(){
    this.addTask = false;
  }
  onAddTask(){
    this.addTask = true;
  }
  onAddingTask(taskData:Task){
    this.tasks.unshift({
        id: new Date().getTime().toString(),
        userId: this.userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.dueDate,

    })
    this.addTask = false;

  }
}
