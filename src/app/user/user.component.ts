import { Component, signal,computed, Input, Output,EventEmitter} from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    // selectedUser = DUMMY_USERS[0];

    // selectedUser = signal(DUMMY_USERS[0]);
    // imagePath = computed(()=>{
    //   return '../../assets/users/'+this.selectedUser().avatar;
    // })
    
    // get imagePath(){
    //   return '../../assets/users/'+this.selectedUser.avatar;
    // }
    @Input() user!:{
      id:string,
      avatar:string,
      name:string
    }
    @Input() selected !:boolean;

    @Output() select = new EventEmitter();

    onSelectedUser(){
      this.select.emit(this.user.id);
   
    //  this.randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //  this.selectedUser.set(DUMMY_USERS[this.randomIndex]);
     
    }
    // @Output() select = new EventEmitter<string>();

  
}

