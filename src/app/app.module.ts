import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { ParentComponent } from './parent/parent.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { ThirdChildComponent } from './third-child/third-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    FirstChildComponent,
    SecondChildComponent,
    ThirdChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
