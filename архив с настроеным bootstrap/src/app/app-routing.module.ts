import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MySecondCComponent } from './my-second-c/my-second-c.component';
import { MyTableComponent } from './my-table/my-table.component';

const routes: Routes = [{
  path:"my-table", component: MyTableComponent
},
{
  path:"mySecondC", component: MySecondCComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
