import { Injectable } from '@angular/core';

export interface User {
  id: number;
  fname: string;
  lname: string;
  email: string;
  mobile: string;
  password: string;
}
@Injectable({ providedIn: 'root' })
export class userService {
  usersArr: User[] = [
    {
      fname: 'Ashish',
      lname: 'kumar',
      mobile: '8787453364',
      email: 'a@b.com',
      password: 'Qwerty@123',
      id: 1
    }
  ];
  getUsers(): User[] {
    return this.usersArr;
  }
  updateUser(index, data: User) {
    this.usersArr.splice(index, 1, data);
  }
  deleteUser(index) {
    this.usersArr.splice(index, 1);
  }
  addUser(data: User) {
    console.log(data);
    this.usersArr.push(data);
  }
}
