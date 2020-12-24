import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
