import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  imports: [
  BrowserModule,
  RouterModule.forRoot([
    {path: 'home', component:HomeComponent},
    {path: 'about-us', component:AboutUsComponent},
     {path: '', redirectTo: '/about-us', pathMatch: 'full'},
 
  ]),
],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
