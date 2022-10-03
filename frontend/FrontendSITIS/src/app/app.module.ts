import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { TabNavComponent } from './components/tab-nav/tab-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterFormComponent,
    HomePageComponent,
    RegisterFormComponent,
    ViewUsersComponent,
    TabNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
