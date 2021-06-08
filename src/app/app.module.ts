import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { userForm } from './userForm.component';
import { RouterModule } from '@angular/router';
import { userRoutingModule } from './app-routing.module';
import { UserList } from './userList.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    userRoutingModule
  ],
  exports: [RouterModule],
  declarations: [AppComponent, userForm, UserList],
  bootstrap: [AppComponent]
})
export class AppModule {}
