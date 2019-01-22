import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { ArtCardDirective } from "./directives/art-card.directive";
import { ArtCardComponent } from './art-card/art-card.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavmenuComponent,
    HomeComponent,
    ErrorComponent,
    ArtCardDirective,
    ArtCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
