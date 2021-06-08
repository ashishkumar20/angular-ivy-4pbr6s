import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from './user.service';

@Component({
  selector: 'user-Form',
  templateUrl: './userForm.component.html'
})
export class userForm implements OnInit {
  userForm: FormGroup;
  editUser: boolean;
  id: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: userService
  ) {}
  ngOnInit() {
    this.userForm = this.fb.group({
      fname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    console.log('In user form');
    this.route.queryParams.forEach(param => {
      console.log(param);
      if (param.length > 0) {
        this.editUser = true;
        this.id = param.id;
        this.userForm.patchValue({
          fname: param.fname,
          lname: param.lname,
          mobile: param.mobile,
          email: param.email,
          password: param.email
        });
      } else {
        this.editUser = false;
      }
    });
  }
  back() {
    this.router.navigate(['user-list']);
  }
  onSubmit() {
    let formValue = this.userForm.value;
    let userlist = this.userService.getUsers();
    if (this.userForm.valid) {
      if (this.editUser) {
        formValue['id'] = this.id;
        this.userService.updateUser(this.id - 1, formValue);
      } else {
        formValue['id'] = userlist.length + 1;
        this.userService.addUser(formValue);
      }
      this.router.navigate(['user-list']);
    } else {
      console.log(this.userForm);
    }
  }
}
