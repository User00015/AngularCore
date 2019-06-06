import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from "./test/test.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./error/error.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { NewAdditionsComponent } from './new-additions/new-additions.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: "", redirectTo: "new", pathMatch: "full" },
      { path: "new", component: NewAdditionsComponent }

    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
