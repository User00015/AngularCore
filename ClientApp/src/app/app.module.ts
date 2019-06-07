import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { JwtInterceptor } from "./core/interceptors/JwtInterceptor";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { NavmenuComponent } from "./navmenu/navmenu.component";
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./error/error.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { UserComponent } from "./user/user.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { NewAdditionsComponent } from "./new-additions/new-additions.component";
import { RouterLinksComponent } from "./router-links/router-links.component";
import { ImageStore } from "./core/store/images.store";
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavmenuComponent,
    HomeComponent,
    ErrorComponent,
    UserComponent,
    UsersListComponent,
    NewAdditionsComponent,
    RouterLinksComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [ImageStore,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true}
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
