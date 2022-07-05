import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes = [
  {path: '', component : ListViewComponent}
]

@NgModule({
  declarations: [
    ListViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class ListModule { }
