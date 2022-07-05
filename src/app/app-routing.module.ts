import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCounterComponent } from './counter/view-counter/view-counter.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full"},
  {path: 'home', loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)},
  {path: 'counter', loadChildren: ()=> import('./counter/counter.module').then(m => m.CounterModule)},
  {path: 'list', loadChildren: ()=> import('./list/list.module').then(m => m.ListModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
