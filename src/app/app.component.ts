import { Component, Output ,EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  // imports: [RouterOutlet,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project_components';
  users = DUMMY_USERS;
  selectedUserId:string|undefined;
  // name:string | undefined;
  
  onSelectUser(id: string){
    this.selectedUserId = id;
    console.log("calling from app"+id);

  }
  get selecteduser(){
    return this.users.find(user=> user.id === this.selectedUserId);
    
  }
}
