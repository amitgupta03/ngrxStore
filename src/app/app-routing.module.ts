import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCounterComponent } from './view-counter/view-counter.component';

const routes: Routes = [
  // {path:'',redirectTo:'view',pathMatch:'full'},
  // {path : 'view', component:ViewCounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
