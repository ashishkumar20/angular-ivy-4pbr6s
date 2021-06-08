import { Route } from '@angular/compiler/src/core';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userForm } from './userForm.component';
import { UserList } from './userList.component';

const userRoutes: Routes = [
  {
    path: 'user-form',
    component: userForm
  },
  {
    path: 'user-list',
    component: UserList
  }
];
@NgModule({
  imports: [RouterModule.forRoot(userRoutes)],
  exports: [RouterModule]
})
export class userRoutingModule {}
