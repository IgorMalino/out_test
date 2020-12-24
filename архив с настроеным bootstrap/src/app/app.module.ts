import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';
import { MySecondCComponent } from './my-second-c/my-second-c.component';
@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    MySecondCComponent,

    NgbModule

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   
  ],
  providers: [],

  bootstrap: [AppComponent]

})
export class AppModule { }
