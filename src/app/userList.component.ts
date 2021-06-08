import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, userService } from './user.service';

@Component({
  selector: 'user-list',
  templateUrl: './userList.component.html'
})
export class UserList implements OnInit {
  usersList: User[];
  constructor(private router: Router, private userService: userService) {}
  ngOnInit() {
    this.usersList = this.userService.getUsers();
  }
  gotoUser() {
    this.router.navigate(['user-form']);
  }
  gotoEdit(index) {
    this.router.navigate(['user-form'], {
      skipLocationChange: true,
      queryParams: this.usersList[index]
    });
  }
  gotoDelete(index) {
    this.userService.deleteUser(index);
  }
}
